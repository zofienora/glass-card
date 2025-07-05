function setupHoverSwap(id, whiteSrc, blackSrc) {
  const logo = document.getElementById(id);

  logo.addEventListener('mouseenter', () => {
    logo.src = blackSrc;
    logo.style.backgroundColor = 'white';
  });

  logo.addEventListener('mouseleave', () => {
    logo.src = whiteSrc;
    logo.style.backgroundColor = 'grey';
  });
}

setupHoverSwap('codepen-logo', './img/codepen-white.png', './img/codepen-black.png');
setupHoverSwap('github-logo', './img/github-white.png', './img/github-black.png');
setupHoverSwap('linkedin-logo', './img/linkedin-white.png', './img/linkedin-black.png');