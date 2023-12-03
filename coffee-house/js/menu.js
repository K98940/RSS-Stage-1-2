export const initMenu = async () => {
  const initBtnRefresh = () => {
    const clickHandler = () => {
      try {
        const tab = document.querySelector('.tab-input:checked');
        tab.removeAttribute('portion');
      } catch (error) {
        console.error(error);
      }
    }

    const btn = document.getElementById('btn-refresh');
    if (!btn) return;
    btn.addEventListener('click', clickHandler)
  }

  const initTabs = (cards) => {
    const tabHandler = () => {
      renderCards(menuContainer, cards);
    }

    const tabs = document.querySelectorAll('.tab-input');
    tabs.forEach(tab => tab.addEventListener('change', tabHandler))
  }

  const getCardsData = async () => {
    const response = await fetch('./assets/json/products.json');
    return await response.json();
  }

  const createMenuHtml = (cards) => {
    const btnRefreshHtml = `
<div class="btn-refresh-container">
  <button id="btn-refresh">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8"
        stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="#403F3D" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  </button>
</div>
    `;
    const sections = cards.map(card => `
<section class="card">
  <picture>
    <img src="${card.img || ''}" alt="" loading="lazy">
  </picture>
  <div class="card-description">
    <h3 class="card-title">${card.name || ''}</h3>
    <p class="card-text">${card.description || ''}</p>
    <span class="card-price">$${card.price || ''}</span>
  </div>
</section>`);

    const article = `
    <article>
    ${sections.join('')}
    </article>
    ${btnRefreshHtml}
    `;
    return article;
  }

  const renderCards = (menuContainer, cards) => {
    const tabInput = document.querySelector('.tab-input:checked').value;
    const filteredCards = cards.filter(card => card.category === tabInput);
    const menuHTML = createMenuHtml(filteredCards);
    menuContainer.innerHTML = menuHTML;
    initBtnRefresh();
  }

  const menuContainer = document.querySelector('.menu-container');
  if (!menuContainer) return;

  try {
    const cards = await getCardsData();
    renderCards(menuContainer, cards);
    initTabs(cards);
  } catch (error) {
    console.error(error);
  }
}