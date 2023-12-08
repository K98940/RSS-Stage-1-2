export const initMenu = async () => {
  const initBtnRefresh = (cardsCount) => {
    const clickHandler = () => {
      try {
        const tab = document.querySelector('.tab-input:checked');
        tab.removeAttribute('portion');
      } catch (error) {
        console.error(error);
      }
    }

    const btn = document.getElementById('btn-refresh');
    if (cardsCount < 5) {
      btn.style.display = 'none';
      return;
    } else {
      btn.style.display = 'block';
    }
    if (!btn) return;
    btn.addEventListener('click', clickHandler, { passive: true })
  }

  const initTabs = (cards) => {
    const tabHandler = () => {
      fillCardsContainer(menuContainer, cards);
    }

    const tabs = document.querySelectorAll('.tab-input');
    tabs.forEach(tab => tab.addEventListener('change', tabHandler), { passive: true })
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
<section class="card" id="${card.id}">
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
    return [article, sections.length];
  }

  const fillCardsContainer = (menuContainer, cards) => {
    const tabInput = document.querySelector('.tab-input:checked').value;
    const filteredCards = cards.filter(card => card.category === tabInput);
    const [menuHTML, cardsCount] = createMenuHtml(filteredCards);
    menuContainer.innerHTML = menuHTML;
    initBtnRefresh(cardsCount);
  }

  const menuContainerClick = (e, cards) => {
    e.stopImmediatePropagation();

    const calcPrice = (base) => {
      const selectedItems = [...document.querySelectorAll('#menu-dialog input:checked')];
      let sum = selectedItems.reduce((sum, item) => sum + Number(item.value), base);
      sum = `$${sum.toFixed(2).toString(10)}`;
      document.getElementById('dialog-sum').textContent = sum;
    }

    const getIdCard = (element) => {
      if (!element) return null;
      if (element.tagName === 'SECTION') return element.getAttribute('id');
      return getIdCard(element.parentElement);
    }

    const initDialogContainer = (id) => {
      const card = cards.filter(card => card.id === +id)[0];
      const html = `
      <form method="dialog">
        <section class="dialog-container">
          <picture>
            <img src="${card.img}" alt="" loading="lazy">
          </picture>
          <div class="dialog-form">
            <h3>${card.name}</h3>
            <p class="dialog-description">${card.description}</p>

            <fieldset class="dialog-tab-container">
              <legend>Size</legend>
              <div class="dialog-tab">
                <input class="tab-input" type="radio" name="tab-size" id="tabs" value="${card.sizes.s['add-price']}" checked>
                <label for="tabs">
                  <span class="tab-icon">S</span>
                  <span class="tab-title">${card.sizes.s.size}</span>
                </label>
              </div>
              <div class="dialog-tab">
                <input class="tab-input" type="radio" name="tab-size" id="tab-M" value="${card.sizes.m['add-price']}">
                <label for="tab-M">
                  <span class="tab-icon">M</span>
                  <span class="tab-title">${card.sizes.m.size}</span>
                </label>
              </div>
              <div class="dialog-tab">
                <input class="tab-input" type="radio" name="tab-size" id="tab-L" value="${card.sizes.l['add-price']}">
                <label for="tab-L">
                  <span class="tab-icon">L</span>
                  <span class="tab-title">${card.sizes.l.size}</span>
                </label>
              </div>
            </fieldset>

            <fieldset class="dialog-tab-container">
              <legend>Additives</legend>
              <div class="dialog-tab">
                <input type="checkbox" name="additives" id="sugar" value="${card.additives[0]['add-price']}">
                <label for="sugar">
                  <span class="tab-icon">1</span>
                  <span class="tab-title">${card.additives[0].name}</span>
                </label>
              </div>
              <div class="dialog-tab">
                <input type="checkbox" name="additives" id="cinnamon" value="${card.additives[1]['add-price']}">
                <label for="cinnamon">
                  <span class="tab-icon">2</span>
                  <span class="tab-title">${card.additives[1].name}</span>
                </label>
              </div>
              <div class="dialog-tab">
                <input type="checkbox" name="additives" id="syrup" value="${card.additives[2]['add-price']}">
                <label for="syrup">
                  <span class="tab-icon">3</span>
                  <span class="tab-title">${card.additives[2].name}</span>
                </label>
              </div>
            </fieldset>

            <p class="dialog-price">
              <span>Total:</span><span id="dialog-sum">$${card.price}</span>
            </p>

            <div class="dialog-alert">
              <div>i</div>
              <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and
              enjoy your favorite coffee with up to 20% discount.</p>
            </div>

            <button class="dialog-btn-close">Close</button>
          </div>
        </section>
      </form>
      `;
      dialog.innerHTML = html;
      return card;
    }

    const id = getIdCard(e.target);
    if (!id) return;
    let { price } = initDialogContainer(id);
    price = Number(price);

    const btnClose = dialog.querySelector('.dialog-btn-close');
    btnClose.addEventListener('click', (e) => {
      e.preventDefault();
      dialog.close();
    })

    const inputs = dialog.querySelectorAll('input');
    inputs.forEach(input => input.addEventListener('change', (_) => calcPrice(price), { passive: true }));

    // dialog.show();
    dialog.showModal();
  }

  const handleDialogClose = (e) => {
    if (e.target === e.currentTarget) dialog.close();
  }

  const menuContainer = document.querySelector('.menu-container');
  if (!menuContainer) return;
  const dialog = document.getElementById('menu-dialog');
  dialog.addEventListener('click', handleDialogClose);

  try {
    const cards = await getCardsData();
    menuContainer.addEventListener('click', (e) => menuContainerClick(e, cards), { passive: true })
    fillCardsContainer(menuContainer, cards);
    initTabs(cards);
  } catch (error) {
    console.error(error);
  }
}