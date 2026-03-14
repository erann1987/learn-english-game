/**
 * Audio module — wraps Web Speech API for pronunciation.
 * Uses a slow speech rate suitable for young learners.
 */
var Audio = (function () {
  "use strict";

  var synth = window.speechSynthesis;
  var RATE = 0.75; // Slow for kids
  var PITCH = 1.1; // Slightly higher pitch, friendlier

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

  return {
    speakEnglish: speakEnglish,
    speakHebrew: speakHebrew,
    stop: stop
  };
})();
