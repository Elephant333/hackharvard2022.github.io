import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Welcome from './Welcome';
import Tracks from './Tracks';
import Schedule from './Schedule';
import Faq from './Faq';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Home from './Home';
import Apply from './Apply';
import Prizes from './Prizes';
import Navigator from './Navigator';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >
      <Router>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/apply" element={<Apply />} />
          <Route exact path="/tracks" element={<Tracks />} />
          <Route exact path="/prizes" element={<Prizes />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
