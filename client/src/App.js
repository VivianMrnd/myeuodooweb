import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/home';
function App() {
  return (
    <div className="container-fluid m-0 p-0 App ">
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
