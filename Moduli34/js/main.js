const circle = document.getElementById("circle");
const timer = document.getElementById("timer");

let lastClickTime = null;

circle.onclick = () => {
  const now = Date.now();

  if (lastClickTime) {
    const diff = ((now - lastClickTime) / 1000).toFixed(2);
    timer.textContent = `You clicked in ${diff} seconds`;
  } else {
    timer.textContent = "Game started! Click again.";
  }

  lastClickTime = now;

  
  const maxX = window.innerWidth - 60;
  const maxY = window.innerHeight - 60;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  circle.style.left = x + "px";
  circle.style.top = y + "px";
};
