/**
 * Audio module — wraps Web Speech API for pronunciation
 * and Web Audio API for sound effects.
 */
var Audio = (function () {
  "use strict";

  var synth = window.speechSynthesis;
  var RATE_WORD = 0.85;
  var RATE_SENTENCE = 0.9;
  var PITCH = 1.0;
  var audioCtx = null;
  var enVoice = null;
  var heVoice = null;
  var voicesReady = false;

  // Quality tiers for English voice selection (highest quality first)
  var EN_VOICE_PREFS = [
    // Apple Premium/Enhanced voices (best quality, most natural)
    "Ava (Premium)", "Zoe (Premium)", "Allison (Premium)",
    "Ava (Enhanced)", "Samantha (Enhanced)", "Allison (Enhanced)",
    "Zoe (Enhanced)", "Evan (Enhanced)", "Tom (Enhanced)",
    // Google network voices (good quality on Chrome)
    "Google US English", "Google UK English Female",
    // Apple default voices
    "Ava", "Samantha", "Alex",
    // Microsoft online voices (Windows/Edge)
    "Microsoft Aria Online", "Microsoft Jenny Online",
    "Microsoft Zira Online", "Microsoft Mark Online",
    // Other common voices
    "Karen", "Daniel"
  ];

  function pickBestVoice(voices, prefs) {
    for (var i = 0; i < prefs.length; i++) {
      for (var j = 0; j < voices.length; j++) {
        if (voices[j].name.indexOf(prefs[i]) !== -1) {
          return voices[j];
        }
      }
    }
    return null;
  }

  function loadVoices() {
    if (!synth) return;
    var voices = synth.getVoices();
    if (!voices.length) return;
    voicesReady = true;

    // Filter to English voices only (en-US, en-GB, en-AU, etc.)
    var enVoices = [];
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang.indexOf("en") === 0) enVoices.push(voices[i]);
    }

    enVoice = pickBestVoice(enVoices, EN_VOICE_PREFS);
    // Fallback: any en-US voice, then any English voice
    if (!enVoice) {
      for (var k = 0; k < enVoices.length; k++) {
        if (enVoices[k].lang === "en-US") { enVoice = enVoices[k]; break; }
      }
    }
    if (!enVoice && enVoices.length) enVoice = enVoices[0];

    // Find Hebrew voice (prefer enhanced)
    var heVoices = [];
    for (var m = 0; m < voices.length; m++) {
      if (voices[m].lang.indexOf("he") === 0) heVoices.push(voices[m]);
    }
    heVoice = pickBestVoice(heVoices, ["Premium", "Enhanced"]);
    if (!heVoice && heVoices.length) heVoice = heVoices[0];
  }

  // Voices load async in Chrome/Android
  if (synth) {
    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
  }

  function getCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function isSentence(text) {
    return text.indexOf(" ") !== -1 && text.length > 15;
  }

  function speak(text, lang, voice) {
    if (!synth) return Promise.resolve();
    synth.cancel();

    return new Promise(function (resolve) {
      setTimeout(function () {
        if (!voicesReady) loadVoices();

        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        if (voice) utterance.voice = voice;
        // Use slightly faster rate for sentences, slower for individual words
        utterance.rate = (lang.indexOf("en") === 0 && !isSentence(text)) ? RATE_WORD : RATE_SENTENCE;
        utterance.pitch = PITCH;
        utterance.volume = 1.0;
        utterance.onend = resolve;
        utterance.onerror = resolve;
        synth.speak(utterance);
      }, 60);
    });
  }

  function speakEnglish(text) {
    return speak(text, "en-US", enVoice);
  }

  function speakHebrew(text) {
    return speak(text, "he-IL", heVoice);
  }

  function stop() {
    if (synth) synth.cancel();
  }

  /** Happy ascending chime for correct answers */
  function playCorrect() {
    var ctx = getCtx();
    var now = ctx.currentTime;
    var notes = [523, 659, 784]; // C5, E5, G5
    notes.forEach(function (freq, i) {
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.3, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.12 + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.35);
    });
  }

  /** Low buzz for wrong answers */
  function playWrong() {
    var ctx = getCtx();
    var now = ctx.currentTime;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = 180;
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  return {
    speakEnglish: speakEnglish,
    speakHebrew: speakHebrew,
    stop: stop,
    playCorrect: playCorrect,
    playWrong: playWrong
  };
})();
