import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import Home from './routes/home';
import Disclaimer from './routes/disclaimer';
import PrivacyPolicy from './routes/privacy';
import Terms from './routes/terms';
import Contact from './routes/contact';
import About from './routes/about';
import HowToUse from './routes/how';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} >
        <Route index element={<Home/>} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<Terms />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="how-to-use" element={<HowToUse />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
