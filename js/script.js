 const links = document.querySelectorAll('.list-link');
const sections = document.querySelectorAll('section');

function onScroll() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

links.forEach(link => {
  link.addEventListener('click', function () {
    setActiveLink(this);
  });
})
window.addEventListener('scroll', onScroll);