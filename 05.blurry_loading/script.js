const backgroundImage = document.querySelector(".background-image");
const loadingText = document.querySelector(".loading-text");

let loading = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let interval = setInterval(blurring, 30);

function blurring() {
  loading++;
  
  if (loading > 100) {
    clearInterval(interval);
  }

  loadingText.innerText = `${loading}%`;
  loadingText.style.opacity = scale(loading, 0, 100, 1, 0);
  backgroundImage.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}
