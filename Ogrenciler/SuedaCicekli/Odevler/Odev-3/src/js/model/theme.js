const logo = document.getElementById('themeLogo');
const logoFooter = document.getElementById('footerThemeLogo');
const navbar = document.getElementById('navbar')
const footerTheme = document.getElementById('footerTheme');
const footerThemeText = document.getElementById('footerThemeText');
const bodyTheme = document.getElementById('bodyTheme');
const editbutton = document.querySelectorAll('.editbutton');

document.getElementById('theme-toggle').addEventListener('click', (e) => {
  const checked = e.target.checked;
  document.body.setAttribute('theme', checked ? 'dark' : 'light');
  navbar.setAttribute('class', checked ? 'navbar fixed-top justify-content-center bg-dark' : 'navbar fixed-top justify-content-center bg-light');
  logo.setAttribute('src', checked ? './src/asset/logo/logo-light.png' : './src/asset/logo/logo-dark.png');
  footerTheme.setAttribute('class', checked ? 'bg-light container  text-center rounded-5 p-3' : 'bg-dark container  text-center rounded-5 p-3');
  logoFooter.setAttribute('src', checked ? './src/asset/logo/darkMinds.png' : './src/asset/logo/lightMinds.png');
  footerThemeText.setAttribute('class', checked ? 'text-dark' : 'text-light');

});


