import React from 'react';
import NewsCard from './NewsCard';

const NewsGrid = ({ articles }) => {
    return (
        <section className="news-grid-section">
            <div className="section-header">
                <h3>Últimas Noticias</h3>
                <div className="header-line"></div>
            </div>
            <div className="news-grid">
                {articles.map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .news-grid-section {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 2rem;
        }
        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .section-header h3 {
          color: black;
          white-space: nowrap;
        }
        .header-line {
          height: 4px;
          background: #007A33;
          flex: 1;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
      `}} />
        </section>
    );
};

export default NewsGrid;
