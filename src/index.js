// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function handleResized() {
  const BODY = document.querySelector("body");
  const currentWidth = window.innerWidth;

  if (currentWidth > 1000) {
    BODY.style.backgroundColor = "yellow";
  } else if (currentWidth <= 1000 && currentWidth > 600) {
    BODY.style.backgroundColor = "purple";
  } else if (currentWidth <= 600) {
    BODY.style.backgroundColor = "blue";
  }
}

window.addEventListener("resize", handleResized);
