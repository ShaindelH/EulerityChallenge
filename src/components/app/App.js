import {Pets} from '../pets/pets';
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import {Header} from "../header/header";
import {AboutMe} from "../aboutMe/aboutMe";
import { PetProvider } from '../../state/petContext/PetContext';

export const App = () => { 

  return (
    <div>
      <PetProvider>
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Pets />} />
          <Route path="/discoverpets" element={<Pets />} />
          <Route path= "/aboutme" element={<AboutMe/>} />
        </Routes>
      </HashRouter>
      </PetProvider>
    </div>
  );
}
