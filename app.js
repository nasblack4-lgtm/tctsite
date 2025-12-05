// Trigger crash after 5 seconds
setTimeout(() => {
  document.body.classList.add("crash");

  // Spawn glitch fragments
  const container = document.getElementById("fragments");
  for (let i = 0; i < 50; i++) {
    const span = document.createElement("span");
    span.className = "fragment";
    span.textContent = "TCT";
    // Random scatter directions
    const x = (Math.random() - 0.5) * 800 + "px";
    const y = (Math.random() - 0.5) * 600 + "px";
    span.style.setProperty("--x", x);
    span.style.setProperty("--y", y);
    span.style.left = "50%";
    span.style.top = "50%";
    container.appendChild(span);
  }
}, 5000);