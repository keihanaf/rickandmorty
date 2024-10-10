
import {Link, Route, Routes} from 'react-router-dom';
import { CharacterProvider } from './context/CharacterContext.jsx';
import CharacterList from './pages/CharacterList.jsx';
import CharacterDetail from './pages/CharacterDetail.jsx';
import Favorites from "./pages/Favorites.jsx";
import NotFoundPage from "./pages/404.jsx";
import Layout from './layout/layout.jsx';

function App() {
    return (
        <CharacterProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<CharacterList/>}/>
                    <Route path="/character/:id" element={<CharacterDetail/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </Layout>
        </CharacterProvider>
    );
}

export default App;
