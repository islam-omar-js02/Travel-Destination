// import logo from './logo.svg';
// import './App.css';
// import Home from './components/home/Home';

// function App() {
//   return (
//     <Home />
//   );
// }

// export default App;

// TASK 17 
import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails"
import { Routes, Route } from "react-router-dom";

import data from "./data/data.json"


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home data={data} />} />
                <Route path="/city/:id" element={<TourDetails data={data} />} />
            </Routes>
        </>
    );
}

export default App;