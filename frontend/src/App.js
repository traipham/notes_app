/**
 * Main React web components 
 */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams
} from 'react-router-dom'

import './App.css';
import Header from './components/Header.js'
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage'

// 'exact' keyword used for exact static url

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" exact Component={NotesListPage}/>
            <Route path="/note/:id" Component={NotePage}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
