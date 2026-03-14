/**
 * Audio module — wraps Web Speech API for pronunciation
 * and Web Audio API for sound effects.
 */
var Audio = (function () {
  "use strict";

  var synth = window.speechSynthesis;
  var RATE = 0.75;
  var PITCH = 1.1;
  var audioCtx = null;

  function getCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function speak(text, lang) {
    if (!synth) return;
    synth.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang || "en-US";
    utterance.rate = RATE;
    utterance.pitch = PITCH;
    return new Promise(function (resolve) {
      utterance.onend = resolve;
      utterance.onerror = resolve;
      synth.speak(utterance);
    });
  }

  function speakEnglish(text) {
    return speak(text, "en-US");
  }

  function speakHebrew(text) {
    return speak(text, "he-IL");
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
