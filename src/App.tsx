import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CatalogGiftCardsPage from './pages/CatalogGiftCardsPage/CatalogGiftCardsPage';
import CoinsBalancePage from './pages/CoinsBalancePage/CoinsBalancePage';
import OwnedGiftCardsPage from './pages/OwnedGiftCardsPage/OwnedGiftCardsPage';
import { Toaster } from 'sonner';
import { UserProvider } from './context/UserContext';

import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <Toaster position='top-center' />
        <Routes>
          <Route
            path='/coins'
            element={<CoinsBalancePage />}
          />
          <Route
            path='/coins/catalog'
            element={<CatalogGiftCardsPage />}
          />
          <Route
            path='/giftcards'
            element={<OwnedGiftCardsPage />}
          />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
