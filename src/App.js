import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <div className={styles.App}>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} exact/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
