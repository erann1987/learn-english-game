/** Simple password gate using SHA-256 hash comparison. */
(function () {
  "use strict";

  var HASH = "4342ad90e8f17dab7ea31702a240fe352b60c6f8ce211c1c882fe8a2878283ff";
  var loginScreen = document.getElementById("login-screen");
  var gameContainer = document.getElementById("game-container");
  var passwordInput = document.getElementById("password-input");
  var loginBtn = document.getElementById("login-btn");
  var loginError = document.getElementById("login-error");

  // Check if already authenticated this session
  if (sessionStorage.getItem("authenticated") === "true") {
    unlock();
  }

  function unlock() {
    loginScreen.classList.add("hidden");
    gameContainer.classList.remove("hidden");
  }

  async function hashPassword(password) {
    var encoder = new TextEncoder();
    var data = encoder.encode(password);
    var buffer = await crypto.subtle.digest("SHA-256", data);
    var arr = Array.from(new Uint8Array(buffer));
    return arr.map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
  }

  async function handleLogin() {
    var value = passwordInput.value.trim();
    if (!value) return;

    var hashed = await hashPassword(value);
    if (hashed === HASH) {
      sessionStorage.setItem("authenticated", "true");
      loginError.classList.add("hidden");
      unlock();
    } else {
      loginError.classList.remove("hidden");
      passwordInput.value = "";
      passwordInput.focus();
    }
  }

  loginBtn.addEventListener("click", handleLogin);
  passwordInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") handleLogin();
  });
})();
