import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import DetailRoute from './components/DetailRoute';

function App() {
  return (
    <div >
      {/* <Details /> */}
      {/* <Header />
      <Partners />
      <Joins />
      <Platforms />
      <Footer /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DetailRoute />} />
        <Route path="/about/:id" element={<About />} />
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
