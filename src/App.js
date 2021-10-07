import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Section from './components/section';


function App() {
  return (
     <div>
        <h1>This is default component</h1>
        <hr />
        <Footer />
        <hr></hr>
        <Header />
        <hr></hr>
        <Section />
     </div>
  );
}

export default App;
