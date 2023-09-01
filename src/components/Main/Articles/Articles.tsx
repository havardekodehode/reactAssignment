import { newsArticles } from "../../../Data/articlesData";
import "./articles.css";

const articles = newsArticles.map((article) => (
    <li className="article" key={article.id}>
        <div
            className="article-image"
            style={{ backgroundImage: `url(${article.image})` }}
        >
            <h2 className="article-title">{article.title}</h2>
            <p className="article-date">{article.date}</p>
        </div>
    </li>
));

export function Articles() {
    return <ul>{articles}</ul>;
}
