(function cultofbulldada() {
  'use strict';

  const audioPlayer = document.querySelector('.js-audioplayer');
  const audioButton = document.querySelector('.js-audiobutton');
  const firstParagraph = document.querySelector('.js-first-paragraph');
  const chat = document.querySelector('.js-chat');


  // Start displaying pause button since player is on autoplay by default
  audioButton.innerHTML = `
    <svg class="pause-btn">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#pause-button"></use>
    </svg>
  `;

  // Is shown when user has pressed 'Play Sound'
  function playSound() {
    audioButton.innerHTML = '<svg class="pause-btn"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#pause-button"></use></svg>';
    audioPlayer.play();
  }

  // Is shown when user has pressed 'Pause Sound'
  function pauseSound() {
    audioButton.innerHTML = '<svg class="play-btn"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-button"></use></svg>';
    audioPlayer.pause();
  }

  // Pause sound if it is playing, else play sound
  function handleSound() {
    if (!audioPlayer.paused) {
      pauseSound();
    } else {
      playSound();
    }
  }

  // Slide in chatt form on page about god once passed first paragraph
  function handleChatt() {
    if (!firstParagraph) {
      return;
    }
    const passedFirstParagraph = firstParagraph.offsetTop + firstParagraph.offsetHeight;
    if ((window.innerHeight + window.scrollY) > passedFirstParagraph) {
      chat.classList.add('slide-in');
    } else {
      chat.classList.remove('slide-in');
    }
  }

  window.addEventListener('scroll', handleChatt);
  audioButton.addEventListener('click', handleSound);
}());
