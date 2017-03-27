<?php @include 'header.php'; ?>
  <body class="front">
    <?php @include 'navigation.php'; ?>
    <div class="fade-in fade-in__symbols">
      <img class="symbol symbol__front symbol--top-left" src="assets/img/cob-symbol.svg" alt="Cult of Bulldada symbol">
      <img class="symbol symbol__front symbol--bottom-right" src="assets/img/cob-symbol.svg" alt="Cult of Bulldada symbol">
      <?php // TODO: Remove styling of bottom left if no longer needed ?>
    </div>
    <div class="emblem fade-in fade-in__emblem">
      <img class="emblem__item" src="assets/img/emblem-2.svg" alt="Emblem of Kazakhstan">
    </div>
    <div class="main-content fade-in fade-in__main">
      <img class="logo" src="assets/img/logo-centered.png" alt="Logotype of Cult of Bulldada Kazakhstan">
      <audio class="js-audioplayer" src="assets/sound/background.wav" autoplay id="js-audioplayer"></audio>
    </div>
    <?php @include 'footer.php'; ?>
