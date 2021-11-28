import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home'
import TestPage1 from './pages/TestPage1'
import TestPage2 from './pages/TestPage2'

import Navigation from './components/Navigation'
import { Container } from 'react-bootstrap';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Navigation />
      </header>

      <main>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/test-1" element={<TestPage1 />} />
              <Route path="/test-2" element={<TestPage2 />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </main>
    </div>
  );
}

export default App;