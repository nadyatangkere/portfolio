import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/global.css';

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
