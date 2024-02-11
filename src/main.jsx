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

const STARTING_INVENTORY = {
    wool: 10,
    textiles: 10,
    coal: 10,
    iron: 10,
    salt: 10,
    grain: 10,
    fish: 10,
    timber: 10,
    slaves: 1
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App data={STARTING_CONDITIONS} inventory={STARTING_INVENTORY} />
    </React.StrictMode>,
)
