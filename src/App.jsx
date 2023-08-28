import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./root.css";

import Entry from "./Routes/Entry";
import Null from "./Routes/Null";
import TheresBloodOnYou from "./Routes/TheresBloodOnYou";

import Archive from "./Routes/SubRoutes/Archive";
import Contact from "./Routes/SubRoutes/Contact";
import Work from "./Routes/SubRoutes/Work";
import Faces from "./Routes/SubRoutes/Faces";

const App = () => {
    return (
        <>
            <main id="page">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Entry />} />
                        <Route path="/theres-blood-on-you" element={<TheresBloodOnYou />} />
                        <Route path="/null-null-null" element={<Null />} />
                        <Route path="/theres-blood-on-you/archive" element={<Archive />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/theres-blood-on-you/work" element={<Work />} />
                        <Route path="/theres-blood-on-you/faces" element={<Faces />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    )
}

export default App;