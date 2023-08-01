const hamIcon = document.querySelector('.ham-icon');
const navItems = document.querySelector('.nav-links');
hamIcon.addEventListener('click', () => {
  hamIcon.classList.toggle('active');
  navItems.classList.toggle('active');
});
document.querySelectorAll('.nav-item a').forEach((n) => n.addEventListener('click', () => {
  hamIcon.classList.remove('active');
  navItems.classList.remove('active');
  })
);
const closebutton = document.querySelector('.cross');
closebutton.addEventListener("click", () => {
  //navItems.classList.add('hide');
  hamIcon.classList.remove('active');
  navItems.classList.remove('active');
});