import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <BackToTop />
      <Header />
      <Main />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
