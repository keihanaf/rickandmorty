
import {Link, Route, Routes} from 'react-router-dom';
import { CharacterProvider } from './context/CharacterContext.jsx';
import CharacterList from './pages/CharacterList.jsx';
import CharacterDetail from './pages/CharacterDetail.jsx';
import Favorites from "./pages/Favorites.jsx";
import NotFoundPage from "./pages/404.jsx";


function App() {
    return (
        <CharacterProvider>
            <div className="container mx-auto p-4">
                <nav className="mb-4">
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/Favorites">Favorites</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<CharacterList/>}/>
                    <Route path="/character/:id" element={<CharacterDetail/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </CharacterProvider>
    );
}

export default App;
