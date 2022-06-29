import React from 'react';
import Main from 'page/main';
import EstimateStep1 from 'page/estimate/step1';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/estimateStep1' element={<EstimateStep1 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
