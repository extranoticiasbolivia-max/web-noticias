import React from 'react';
import { motion } from 'framer-motion';
import { strapiService } from '../services/strapi';

const NewsCard = ({ article }) => {
    const handleView = () => {
        strapiService.incrementViews(article.id, article.attributes.views);
    };

    const imageUrl = article.attributes.cover?.data?.attributes?.formats?.medium?.url
        ? `https://integral-horse-d2820bd789.strapiapp.com${article.attributes.cover.data.attributes.formats.medium.url}`
        : 'https://via.placeholder.com/400x250?text=Extra+Noticias';

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="news-card"
            onClick={handleView}
        >
            <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="card-body">
                <span className="card-category">{article.attributes.category?.data?.attributes?.name || 'GENERAL'}</span>
                <h4>{article.attributes.title}</h4>
                <p>{article.attributes.description?.substring(0, 100)}...</p>
                <div className="card-footer">
                    <span>{article.attributes.views || 0} vistas</span>
                    <button className="read-more">Leer más</button>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .news-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          cursor: pointer;
          border-top: 3px solid transparent;
          transition: 0.3s;
        }
        .news-card:hover {
          border-top-color: #E30613;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .card-image {
          height: 200px;
          background-size: cover;
          background-position: center;
        }
        .card-body {
          padding: 1.5rem;
        }
        .card-category {
          color: #007A33;
          font-weight: 900;
          font-size: 0.7rem;
          text-transform: uppercase;
        }
        .card-body h4 {
          font-size: 1.2rem;
          margin: 0.5rem 0;
          line-height: 1.2;
          text-transform: none;
        }
        .card-body p {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 1rem;
        }
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: #888;
        }
        .read-more {
          background: none;
          color: #E30613;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 0.75rem;
        }
      `}} />
        </motion.div>
    );
};

export default NewsCard;
