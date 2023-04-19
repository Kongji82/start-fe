const $progress = document.querySelector('#progress');
let value;
let progressbar = 0;

setInterval(() => {
  if (progressbar >= 100) {
    value = -1;
  } else if (progressbar <= 0) {
    value = 1;
  }
  progressbar += value;
  $progress.style.width = `${progressbar}%`;
}, 20);
