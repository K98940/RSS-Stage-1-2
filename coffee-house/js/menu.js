export const initMenu = async () => {
  const getCardsData = async () => {
    const response = await fetch('./assets/json/products.json');
    return await response.json();
  }

  const createMenuHtml = (cards) => {
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
    <article T-only-4>
    ${sections.join('')}
    </article>
    `;
    return article;
  }

  const renderCards = (menuContainer, cards) => {
    const tabInput = document.querySelector('.tab-input[checked]').value;
    const filteredCards = cards.filter(card => card.category === tabInput);
    const menuHTML = createMenuHtml(filteredCards);
    menuContainer.innerHTML = menuHTML;
  }

  const menuContainer = document.querySelector('.menu-container');
  if (!menuContainer) return;

  try {
    const cards = await getCardsData();
    renderCards(menuContainer, cards);
  } catch (error) {
    console.error(error);
  }
}