type SourceType = {
    id: string;
    name: string;
};

export interface Articles {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: SourceType;
    title: string;
    url: string;
    urlToImage: string;
}

export interface ISources {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface INews {
    articles: Articles[];
    status: string;
    totalResults: number;
}
