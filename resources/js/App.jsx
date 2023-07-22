import React from 'react';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Accueil from './pages/front/Accueil';
import Dash from './pages/back/Dash';
import NotFound from './pages/front/NotFound';
import NavBar from './layouts/NavBar';
 

export default function App() {
    return (
      <>
                
            <Router>  {/* Define navbar here */}
                    <NavBar />  
                     
                    <Routes>
                        {/* Define your routes */}
                        <Route path="/" element={<Accueil />} />
                        <Route path="/dash" element={<Dash />} />

                        {/* Handle 404 Not Found */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
        </>

    );
}


if (document.getElementById('root')) {
    createRoot(document.getElementById('root')).render(<App />)
}