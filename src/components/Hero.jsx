import React from 'react';
import { motion } from 'framer-motion';
import { strapiService } from '../services/strapi';

const Hero = ({ article }) => {
    const handleView = () => {
        strapiService.incrementViews(article.id, article.attributes.views);
    };

    const imageUrl = article.attributes.cover?.data?.attributes?.url
        ? `https://integral-horse-d2820bd789.strapiapp.com${article.attributes.cover.data.attributes.url}`
        : 'https://via.placeholder.com/1200x600?text=Extra+Noticias+Bolivia';

    return (
        <section className="hero-section" onClick={handleView}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-card"
            >
                <div className="hero-image" style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className="hero-overlay">
                        <span className="badge-featured">DESTACADO</span>
                        <span className="category-tag">{article.attributes.category?.data?.attributes?.name || 'NOTICIA'}</span>
                        <h2>{article.attributes.title}</h2>
                        <p>{article.attributes.description}</p>
                        <div className="hero-meta">
                            <span>{article.attributes.author || 'Redacción Extra'}</span>
                            <span>•</span>
                            <span>{article.attributes.views || 0} vistas</span>
                        </div>
                    </div>
                </div>
            </motion.div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .hero-section {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 2rem;
          cursor: pointer;
        }
        .hero-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .hero-image {
          height: 500px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 4rem 2rem 2rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          color: white;
        }
        .badge-featured {
          background: #E30613;
          padding: 4px 12px;
          border-radius: 4px;
          font-weight: 900;
          font-size: 0.7rem;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .category-tag {
          color: #FCE300;
          font-weight: 700;
          margin-left: 1rem;
          text-transform: uppercase;
          font-size: 0.8rem;
        }
        .hero-overlay h2 {
          font-size: 2.5rem;
          margin: 0.5rem 0;
          line-height: 1.1;
        }
        .hero-overlay p {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 800px;
        }
        .hero-meta {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          font-weight: 700;
          font-size: 0.8rem;
          color: #ccc;
        }
      `}} />
        </section>
    );
};

export default Hero;
