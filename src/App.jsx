import React, { useEffect, useState } from 'react';
import { strapiService } from './services/strapi';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsGrid from './components/NewsGrid';

function App() {
    const [articles, setArticles] = useState([]);
    const [featured, setFeatured] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const [allArticles, featuredArticle] = await Promise.all([
                    strapiService.getArticles(),
                    strapiService.getFeatured()
                ]);
                setArticles(allArticles);
                setFeatured(featuredArticle);
            } catch (error) {
                console.error("Error loading news:", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                color: '#E30613',
                fontWeight: 'bold',
                fontSize: '1.5rem'
            }}>
                CARGANDO NOTICIAS...
            </div>
        );
    }

    return (
        <div className="app-container">
            <Header />
            <main>
                {featured && <Hero article={featured} />}
                <NewsGrid articles={articles.filter(a => a.id !== featured?.id)} />
            </main>
            <footer style={{
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: '#000',
                color: '#fff',
                marginTop: '3rem'
            }}>
                <p>&copy; 2026 Extra Noticias Bolivia - Todos los derechos reservados</p>
            </footer>
        </div>
    );
}

export default App;
