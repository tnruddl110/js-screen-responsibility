// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function handleResized() {
  const BODY = document.querySelector("body");
  const currentWidth = window.innerWidth;

  if (currentWidth > 900) {
    BODY.style.backgroundColor = "#f1c40f";
  } else if (currentWidth <= 900 && currentWidth > 600) {
    BODY.style.backgroundColor = "#8e44ad";
  } else if (currentWidth <= 600) {
    BODY.style.backgroundColor = "#3498db";
  }
}

window.addEventListener("resize", handleResized);
