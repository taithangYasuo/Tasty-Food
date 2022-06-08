import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Menu from './sections/Menu';
import DownloadApp from './sections/DownloadApp';
import Contact from './sections/Contact';

function Main() {
  return (
    <main className="main">
      <Home />
      <About />
      <Services />
      <Menu />
      <DownloadApp />
      <Contact />
    </main>
  );
}

export default Main;
