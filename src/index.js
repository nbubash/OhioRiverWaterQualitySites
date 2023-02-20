import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';
import Site from './Site';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Site />
        </BrowserRouter>
    </React.StrictMode>
);