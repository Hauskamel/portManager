import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const STARTING_CONDITIONS = {
    year: 1799,
    money: 1000,
    docks: 1,
    round: 1
}

const STARTING_INVENTORY = {
    wool: 0,
    textiles: 0,
    coal: 0,
    slaves: 0
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App data={STARTING_CONDITIONS} inventory={STARTING_INVENTORY} />
    </React.StrictMode>,
)
