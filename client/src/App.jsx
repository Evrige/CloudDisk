import Navbar from "./components/navbar/Navbar";
import './app.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from "./components/registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <div className="wrap">
              <Routes>
                  <Route path="/registration" element={<Registration/>}/>
              </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
