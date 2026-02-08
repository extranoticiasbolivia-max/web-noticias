import React from 'react';

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-top-bar">
                <div className="bar-red"></div>
                <div className="bar-yellow"></div>
                <div className="bar-green"></div>
            </div>
            <div className="header-content">
                <div className="logo-container">
                    <div className="circular-logo">
                        <span className="logo-inner">E</span>
                    </div>
                    <h1 className="brand-name">Extra Noticias <span>Bolivia</span></h1>
                </div>
                <nav className="main-nav">
                    <a href="#" className="active">Inicio</a>
                    <a href="#">Nacional</a>
                    <a href="#">Mundo</a>
                    <a href="#">Deportes</a>
                </nav>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .main-header {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .header-top-bar {
          display: flex;
          height: 6px;
        }
        .bar-red { flex: 1; background: #E30613; }
        .bar-yellow { flex: 1; background: #FCE300; }
        .bar-green { flex: 1; background: #007A33; }
        
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .circular-logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E30613, #007A33);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: 900;
          font-size: 1.5rem;
          border: 3px solid #FCE300;
        }
        .brand-name {
          font-size: 1.5rem;
          color: black;
          letter-spacing: -1px;
        }
        .brand-name span {
          color: #E30613;
        }
        .main-nav {
          display: flex;
          gap: 1.5rem;
        }
        .main-nav a {
          text-decoration: none;
          color: black;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          padding-bottom: 5px;
          border-bottom: 3px solid transparent;
          transition: 0.3s;
        }
        .main-nav a:hover, .main-nav a.active {
          color: #E30613;
          border-bottom-color: #E30613;
        }
      `}} />
        </header>
    );
};

export default Header;
