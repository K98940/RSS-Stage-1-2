import { View, Vewis } from './types/types';

const btnGarage = document.createElement('button');
btnGarage.textContent = View.garage;
btnGarage.addEventListener('click', () => {
  location.hash = View.garage;
});

const btnStat = document.createElement('button');
btnStat.textContent = View.winners;
btnStat.addEventListener('click', () => {
  location.hash = View.winners;
});

const container = document.createElement('div');
const garage = document.createElement('p');
garage.textContent = View.garage;

const winners = document.createElement('p');
winners.textContent = View.winners;
container.append(garage);

document.body.append(btnGarage, btnStat, container);

const views: Vewis = {
  garage: garage,
  winners: winners,
};

const router = () => {
  const hash = window.location.hash.replace('#', '');
  switch (hash) {
    case View.garage:
      container.innerHTML = '';
      container.append(views.garage);
      break;
    case View.winners:
      container.innerHTML = '';
      container.append(winners);
      break;
  }
};

window.addEventListener('hashchange', router);
