import state from '../../state/state';
import { createElement } from '../../utils/createNode';
import './showNotice.css';

export const showNotice = (notice, error = false) => {
  state.html.notice.innerText = notice;
  state.html.notice.classList.add('notice-container_visable');
  if (error) {
    state.html.notice.classList.add('notice_error');
  } else state.html.notice.classList.remove('notice_error');
  setTimeout(() => {
    state.html.notice.classList.remove('notice-container_visable');
  }, state.game.noticeDelay || 2000);
};

export const initNotice = () => {
  if (!state.html.notice) {
    const noticeContainer = createElement({ cls: 'notice-container' });
    state.html.notice = noticeContainer;
    document.body.append(state.html.notice);
  }
};
