export const initBurgerMenu = () => {
  const burgerBtn = document.getElementById('burgerBtn');
  const menu = document.getElementById('burgerMenu');

  const clickBurgerHandle = () => {
    menu && menu.classList.toggle('burger__active');
    burgerBtn && burgerBtn.classList.toggle('burger-btn__active');
  }

  const clickMenuHandle = (e) => {
    console.log(e.target.href);
    const isLinkTouched = e.target.href;
    if (isLinkTouched) clickBurgerHandle();
  }

  burgerBtn && burgerBtn.addEventListener('click', clickBurgerHandle);
  menu && menu.addEventListener('click', clickMenuHandle);
}