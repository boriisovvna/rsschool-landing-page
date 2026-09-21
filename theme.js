const lightDarkButton = document.querySelector('.light-dark-button');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
}

lightDarkButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  const theme = document.body.classList.contains('dark-theme')
    ? 'dark'
    : 'light';

  localStorage.setItem('theme', theme);
})