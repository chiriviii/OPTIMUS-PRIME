document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('Audio');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const progressInput = document.getElementById('progressInput');
  
    playBtn.addEventListener('click', function () {
      audio.play();
    });
  
    pauseBtn.addEventListener('click', function () {
      audio.pause();
    });
  
    stopBtn.addEventListener('click', function () {
      audio.pause();
      audio.currentTime = 0;
      progressInput.value = 0;
    });
  
    forwardBtn.addEventListener('click', function () {
      audio.currentTime += 5;
    });
  
    audio.addEventListener('timeupdate', function () {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressInput.value = progress;
    });
  
    progressInput.addEventListener('input', function () {
      const seekTime = (progressInput.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    });
  });