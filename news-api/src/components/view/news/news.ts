import './news.css';
import { Articles, getHTMLElement, isDocumentFragment } from '../../../types/types';

class News {
  draw(data: Articles[]) {
    if (data.length === 0) return;
    const news = data.length > 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
    if (!newsItemTemp) {
      console.error('#newsItemTemp not found');
      return;
    }

    news.forEach((item, idx) => {
      const newsClone: Node = newsItemTemp.content.cloneNode(true);
      if (!isDocumentFragment(newsClone)) return;

      if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

      getHTMLElement(newsClone, '.news__meta-photo').style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      getHTMLElement(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
      getHTMLElement(newsClone, '.news__meta-date').textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      getHTMLElement(newsClone, '.news__description-title').textContent = item.title;
      getHTMLElement(newsClone, '.news__description-source').textContent = item.source.name;
      getHTMLElement(newsClone, '.news__description-content').textContent = item.description;
      getHTMLElement(newsClone, '.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const mainNews: HTMLDivElement | null = document.querySelector('.news');
    if (!mainNews) {
      console.error('.news not found');
      return;
    }
    mainNews.innerHTML = '';
    mainNews.appendChild(fragment);
  }
}

export default News;
