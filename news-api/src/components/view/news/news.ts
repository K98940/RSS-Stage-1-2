import './news.css';
import { Articles, isDocumentFragment } from '../../../types/types';

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

      const photo: HTMLDivElement | null = newsClone.querySelector('.news__meta-photo');
      photo && (photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`);
      const author: HTMLLIElement | null = newsClone.querySelector('.news__meta-author');
      author && (author.textContent = item.author || item.source.name);
      const date: HTMLLIElement | null = newsClone.querySelector('.news__meta-date');
      date && (date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-'));
      const title: HTMLHeadElement | null = newsClone.querySelector('.news__description-title');
      title && (title.textContent = item.title);
      const source: HTMLHeadElement | null = newsClone.querySelector('.news__description-source');
      source && (source.textContent = item.source.name);
      const descriptionContent: HTMLParagraphElement | null = newsClone.querySelector('.news__description-content');
      descriptionContent && (descriptionContent.textContent = item.description);
      const linkReadMore: HTMLLinkElement | null = newsClone.querySelector('.news__read-more a');
      linkReadMore?.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const mainNews = document.querySelector('.news') as HTMLDivElement;
    mainNews.innerHTML = '';
    mainNews.appendChild(fragment);
  }
}

export default News;
