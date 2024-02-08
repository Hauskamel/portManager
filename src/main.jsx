import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const STARTING_CONDITIONS = {
    year: 1695,
    money: 5000,
    shipsOwned: 0,
    docks: 2
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App data={STARTING_CONDITIONS}/>
    </React.StrictMode>,
)
