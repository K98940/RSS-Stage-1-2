export const initBurgerMenu = () => {
  const burgerBtn = document.getElementById('burgerBtn');
  const menu = document.getElementById('burgerMenu');

  const clickBurgerHandle = () => {
    menu && menu.classList.toggle('burger__active');
    burgerBtn && burgerBtn.classList.toggle('burger-btn__active');
  }

  const clickMenuHandle = (e) => {
    const isLinkTouched = e.target.parentElement.href || e.target.href;
    if (isLinkTouched) clickBurgerHandle();
  }

  burgerBtn && burgerBtn.addEventListener('click', clickBurgerHandle);
  menu && menu.addEventListener('click', clickMenuHandle);
}