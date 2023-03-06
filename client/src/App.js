import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from './components/header'
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='' element= ""/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
