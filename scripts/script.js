(function cultofbulldada() {
  'use strict';

  // TODO: If you have time, sort out your buttons!
  const audioPlayer = document.querySelector('.js-audioplayer');
  const audioButton = document.querySelector('.js-audiobutton');
  let isActive = true;
  audioButton.innerHTML = '<svg class="pause-btn"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#pause-button"></use></svg>'; // Start with Mute sound and autoplay

  // Is shown when user has pressed 'Play Sound'
  function muteSound() {
    audioButton.innerHTML = '<svg class="pause-btn"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#pause-button"></use></svg>';
    audioPlayer.play();
    isActive = false;
  }

  // Is shown when user has pressed 'Mute Sound'
  function playSound() {
    audioButton.innerHTML = '<svg class="play-btn"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-button"></use></svg>';
    audioPlayer.pause();
    isActive = true;
  }

  // Mute sound if it is playing, else play sound
  function handleSound() {
    if (isActive) {
      muteSound();
    } else {
      playSound();
    }
  }

  audioButton.addEventListener('click', handleSound);
}());
