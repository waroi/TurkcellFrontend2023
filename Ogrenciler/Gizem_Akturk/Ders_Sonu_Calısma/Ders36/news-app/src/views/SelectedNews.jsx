import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const SelectedNews = () => {
const [article, setArticle] = useState(null);
const { id } = useParams();
useEffect(() => {
fetchItem();
}, []);
const fetchItem = async () => {
try {
const response = await fetch(`https://newsapi.org/v2/everything?q=${id}&apiKey=4a055a5ef0a747b88f3745500b4eb756`);
const data = await response.json();
if(data.articles.length>0)
setArticle(data.articles[0]);

} catch (error) {
console.error(error);
}
};
return (
<div>
{article ?  (
<div className="card">
<div className="card-image">
<img src={article.urlToImage} alt={article.title} />
<span className="card-title">{article.title}</span>
</div>
<div className="card-content">
<p>{article.description}</p>
</div>
<div className="card-action">
<a href={article.url} target="_blank" rel="noopener noreferrer">
Read More
</a>
</div>
</div>
) : (
<h1>Loading...</h1>

)}
</div>
);
};
export default SelectedNews;