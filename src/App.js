
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';


function App(props) {
  return (
    <>
    <Navbar />
    {/* <Navbar title="motherfather2" Home= {3} Link="links" /> */}
    <div className="container">
    <Textforms heading="why always email"/>
    </div>
    </>   
  );
}

export default App;
