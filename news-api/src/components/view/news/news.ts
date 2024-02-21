import './news.css';
import { Articles } from '../../../types/types';

class News {
    draw(data: Articles[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const photo = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
            photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const author = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
            author.textContent = item.author || item.source.name;
            const date = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
            date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            const title = newsClone.querySelector('.news__description-title') as HTMLHeadElement;
            title.textContent = item.title;
            const source = newsClone.querySelector('.news__description-source') as HTMLHeadElement;
            source.textContent = item.source.name;
            const descriptionContent = newsClone.querySelector('.news__description-content') as HTMLParagraphElement;
            descriptionContent && (descriptionContent.textContent = item.description);
            const linkReadMore = newsClone.querySelector('.news__read-more a') as HTMLLinkElement;
            linkReadMore?.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const mainNews = document.querySelector('.news') as HTMLDivElement;
        mainNews.innerHTML = '';
        mainNews.appendChild(fragment);
    }
}

export default News;
