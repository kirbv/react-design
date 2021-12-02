import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu"
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Services from './components/Services';
import Designers from './components/Designers';
import Packages from './components/Packages';
import Contact from './components/Contact';
function App() {
  return (
    <>
  <Menu/>
	<div className="main">
		<h1>Interior Design</h1>
    <Showcase/>
    <Services/>
    <Designers/>
    <Packages/>
    <Contact/>
	</div>
  <Footer/>
  </>
  );
}

export default App;
