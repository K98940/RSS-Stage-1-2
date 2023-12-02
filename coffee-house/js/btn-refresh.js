export const initBtnRefresh = () => {
  const clickHandler = () => {
    try {
      const menuContainer = document.querySelector('.menu-container article');
      menuContainer.removeAttribute('t-only-4');
      btn.style.display = 'none';
    } catch (error) {
      console.error(error);

    }
  }

  const btn = document.getElementById('btn-refresh');
  if (!btn) return;
  btn.addEventListener('click', clickHandler)
}