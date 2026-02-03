
  console.log("script is running!");
const noButton = document.getElementById("no");

  let mouseX = 0;
  let mouseY = 0;

  let buttonX = window.innerWidth * 0.55;
  let buttonY = window.innerHeight * 0.55;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    const rect = noButton.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const dx = btnX - mouseX;
    const dy = btnY - mouseY;
    const distance = Math.hypot(dx, dy);

    const safeDistance = 100;
    const speed = 0.15; // smoothing factor

    if (distance < safeDistance && distance > 0) {
      buttonX += (dx / distance) * (safeDistance - distance) * speed;
      buttonY += (dy / distance) * (safeDistance - distance) * speed;

      // keep on screen
      buttonX = Math.max(0, Math.min(window.innerWidth - rect.width, buttonX));
      buttonY = Math.max(0, Math.min(window.innerHeight - rect.height, buttonY));
    }

    noButton.style.left = buttonX + "px";
    noButton.style.top = buttonY + "px";

    requestAnimationFrame(animate);
  }
  animate();
document.getElementById("yes").addEventListener("click", () => {
  for (let i = 0; i < 95; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.fontSize = (4 + Math.random() * 48) + "px";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
});

