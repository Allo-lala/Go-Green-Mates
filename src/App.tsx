import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import WhatsAppButton from './components/Layout/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Campaigns from './pages/Campaigns';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'team' | 'services' | 'campaigns' | 'blog' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'team':
        return <Team />;
      case 'services':
        return <Services />;
      case 'campaigns':
        return <Campaigns />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="pt-20">
          {renderPage()}
        </main>
        <Footer onNavigate={handleNavigate} />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
