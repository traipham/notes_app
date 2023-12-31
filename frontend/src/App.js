/**
 * Main React web components 
 */
import {
  HashRouter as Router, // TODO: React Router URL routing issues
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
        <div className="container dark">
          <div className='app'>
            <Header />
            <Routes>
              <Route path="/" exact Component={NotesListPage} />
              <Route path="/note/:id" Component={NotePage} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
