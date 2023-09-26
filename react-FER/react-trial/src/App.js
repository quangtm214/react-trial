import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
// import Players from './components/Players'
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
