import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

import App from './Components/App';
import Home from './Components/Home';
import Groups from './Components/Groups';
import Events from './Components/Events';
import Gallery from './Components/Gallery';
import About from './Components/About';

const icons = [
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faCalendarAlt
]

library.add.apply(library, icons);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="events" element={<Events />}></Route>
          <Route path="gallery" element={<Gallery />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
