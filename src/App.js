import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import Contact from './component/Contact';
import About from './component/About';
import Services from './component/Services';


function App() {
  return (
    <div>
     <Header />
     <Home img ='https://images.unsplash.com/photo-1643011679890-aae79b761c4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
     img2= 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>

    <About />
    <Services />
     <Contact />
    </div>
  );
}

export default App;
