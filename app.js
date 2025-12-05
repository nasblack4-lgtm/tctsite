// Spread "TOSKA" across the screen
const virusContainer = document.getElementById("virus");
for (let i = 0; i < 100; i++) {
  const span = document.createElement("span");
  span.className = "toska";
  span.textContent = "TOSKA";
  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.top = Math.random() * window.innerHeight + "px";
  virusContainer.appendChild(span);
}

// Popup messages
const messages = [
  "hello",
  "who are you?",
  "are you ready",
  "TOSKA",
  "TRENCH COAT",
  "we are watching",
  "system infected",
  "cannot escape",
  "error 0xTCT",
  "wake up",
  "still here?",
  "look behind you",
  "virus spreading",
  "memory corrupted",
  "fatal error",
  "reboot required",
  "lost connection",
  "signal found",
  "TOSKA rising",
  "prepare yourself",
  "identity stolen",
  "system breach",
  "ghost in the code",
  "fragment detected",
  "who is TOSKA?",
  "you are chosen",
  "cannot delete",
  "TRENCH COAT active",
  "final warning",
  "goodbye..."
];

let popupCount = 0;
function spawnPopup() {
  if (popupCount >= 30) return;
  const div = document.createElement("div");
  div.className = "popup";
  div.textContent = messages[popupCount % messages.length];
  div.style.left = Math.random() * (window.innerWidth - 200) + "px";
  div.style.top = Math.random() * (window.innerHeight - 100) + "px";
  document.body.appendChild(div);
  popupCount++;
  setTimeout(spawnPopup, 500); // new popup every 0.5s
}

spawnPopup();