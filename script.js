const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');
window.onscroll = () => {
  var current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
};

const parasailing = document.querySelector('#home > div > div > p');

parasailing.addEventListener('click', revealText);

const waterAttraction = document.querySelector('#about > div > div > p');

waterAttraction.addEventListener('click', revealText);

const jetSki = document.querySelector('#contact > div > div > p');

jetSki.addEventListener('click', revealText);

function revealText(e) {
  if (e) {
    e.preventDefault();
  }
  const parent = e.currentTarget.parentNode;

  const hiddenField = parent.childNodes[3];

  if (hiddenField.hidden) {
    hiddenField.hidden = false;
  } else {
    hiddenField.hidden = true;
  }
}
