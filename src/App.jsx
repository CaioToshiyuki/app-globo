import './App.css';
import Header from './header/Header.jsx';
import Content from './body/Content.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import 'typeface-inter';


export default () => (
    <div className="App">
        <Router>
            <Header />
            <Content />
        </Router>
    </div>
)
