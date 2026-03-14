/**
 * Audio module — wraps Web Speech API for pronunciation
 * and Web Audio API for sound effects.
 */
var Audio = (function () {
  "use strict";

  var synth = window.speechSynthesis;
  var RATE = 0.8;
  var PITCH = 1.0;
  var audioCtx = null;
  var enVoice = null;
  var heVoice = null;
  var voicesReady = false;

  function loadVoices() {
    if (!synth) return;
    var voices = synth.getVoices();
    if (!voices.length) return;
    voicesReady = true;

    // Find best English voice
    var enNames = ["Samantha", "Google US English", "Google UK English Female", "Karen", "Daniel"];
    for (var i = 0; i < enNames.length; i++) {
      for (var j = 0; j < voices.length; j++) {
        if (voices[j].name.indexOf(enNames[i]) !== -1 && voices[j].lang.indexOf("en") === 0) {
          enVoice = voices[j];
          break;
        }
      }
      if (enVoice) break;
    }
    // Fallback: any English voice
    if (!enVoice) {
      for (var k = 0; k < voices.length; k++) {
        if (voices[k].lang.indexOf("en") === 0) { enVoice = voices[k]; break; }
      }
    }

    // Find Hebrew voice
    for (var m = 0; m < voices.length; m++) {
      if (voices[m].lang.indexOf("he") === 0) { heVoice = voices[m]; break; }
    }
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

  function speak(text, lang, voice) {
    if (!synth) return Promise.resolve();
    synth.cancel();

    return new Promise(function (resolve) {
      setTimeout(function () {
        // Reload voices if they weren't ready before
        if (!voicesReady) loadVoices();

        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        if (voice) utterance.voice = voice;
        utterance.rate = RATE;
        utterance.pitch = PITCH;
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
