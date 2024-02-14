import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const TRADER = [];

const ALL_GOODS = {
    wool: 0,
    textiles: 0,
    coal: 0,
    iron: 0,
    salt: 0,
    grain: 0,
    fish: 0,
    timber: 0,
    slaves: 0
}


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
        <App trader={TRADER} data={STARTING_CONDITIONS} inventory={STARTING_INVENTORY} />
    </React.StrictMode>,
)
