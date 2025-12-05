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

let popups = [];
let popupCount = 0;

// Spawn stacked popups
function spawnPopup() {
  if (popupCount >= 30) {
    collapsePopups();
    return;
  }
  const div = document.createElement("div");
  div.className = "popup";
  div.textContent = messages[popupCount % messages.length];
  // Stack diagonally
  div.style.top = (50 + popupCount * 10) + "px";
  div.style.left = (50 + popupCount * 10) + "px";
  document.body.appendChild(div);
  popups.push(div);
  popupCount++;
  setTimeout(spawnPopup, 300); // new popup every 0.3s
}

// Collapse popups one by one
function collapsePopups() {
  let i = 0;
  function removeNext() {
    if (i < popups.length) {
      popups[i].remove();
      i++;
      setTimeout(removeNext, 200); // remove every 0.2s
    } else {
      showFinalMessage();
    }
  }
  removeNext();
}

// Show final message with fade in/out
function showFinalMessage() {
  const msg = document.getElementById("final-message");
  msg.textContent = "It's still too early... Goodbye.";
  msg.style.display = "block";
  msg.style.animation = "fadeIn 2s forwards";

  // After 5 seconds, fade out
  setTimeout(() => {
    msg.style.animation = "fadeOut 3s forwards";
    // After fade out, clear screen
    setTimeout(() => {
      document.body.innerHTML = "";
    }, 3000);
  }, 5000);
}

spawnPopup();