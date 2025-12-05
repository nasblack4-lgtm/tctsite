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

function spawnPopup() {
  if (popupCount >= 30) {
    collapsePopups();
    return;
  }
  const div = document.createElement("div");
  div.className = "popup";
  div.textContent = messages[popupCount % messages.length];
  div.style.top = (50 + popupCount * 10) + "px";
  div.style.left = (50 + popupCount * 10) + "px";
  document.body.appendChild(div);
  popups.push(div);
  popupCount++;
  setTimeout(spawnPopup, 300);
}

function collapsePopups() {
  let i = 0;
  function removeNext() {
    if (i < popups.length) {
      popups[i].remove();
      i++;
      setTimeout(removeNext, 200);
    } else {
      showFinalMessage();
    }
  }
  removeNext();
}

function showFinalMessage() {
  const msg = document.getElementById("final-message");
  msg.textContent = "It's still too early... Goodbye.";
  msg.style.display = "block";
  msg.style.animation = "fadeIn 2s forwards";

  setTimeout(() => {
    msg.style.animation = "fadeOut 3s forwards";
    setTimeout(() => {
      msg.remove();
      startToskaSpam();
    }, 3000);
  }, 5000);
}

function startToskaSpam() {
  let count = 0;
  const spamInterval = setInterval(() => {
    for (let i = 0; i < 10; i++) {
      const span = document.createElement("span");
      span.className = "toska-spam";
      span.textContent = "TOSKA";
      span.style.left = Math.random() * window.innerWidth + "px";
      span.style.top = Math.random() * window.innerHeight + "px";
      document.body.appendChild(span);
    }
    count++;
    if (count > 50) clearInterval(spamInterval);
  }, 100);
}

spawnPopup();