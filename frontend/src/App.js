/**
 * Main React web components 
 */
import './App.css';
import Header from './components/Header.js'
import NotesListPage from './pages/NotesListPage';
function App() {
  return (
    <div className="App">
      <Header/>
      <NotesListPage/>
    </div>
  );
}

export default App;
