import './App.css';
import All from "./all";
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Merge from './merge';
import Insertion from './Insertion';

const App = () => {



  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">All</Link>
              </li>
              <li>
                <Link to="/merge">Merge</Link>
              </li>
              <li>
                <Link to="/insertion">Insertion</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/merge" element={<Merge />} />
            <Route path="/insertion" element={<Insertion />} />
            <Route path="/" element={<All />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
