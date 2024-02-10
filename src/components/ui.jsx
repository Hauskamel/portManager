import "../component_styles/ui.css";
import {useState} from "react";
// import endYear from "../functions/end-year.js";

function Ui (props) {

    // Conditions
    let YEAR = props.data.data.year;
    let MONEY = props.data.data.money;
    let SHIPSOWNED = props.data.data.shipsOwned
    let DOCKS = props.data.data.docks

    // Inventory
    let WOOL = props.data.inventory.wool
    let TEXTILES = props.data.inventory.textiles

    return (
        <div className="ui-container">

            <div className="ui-inventory">
                <h3>Your Inventory:</h3>
                <p>Wool: {WOOL}</p>
                <p>Textiles: {TEXTILES}</p>
            </div>

            <div className="ui-stats">
                <h3 className="year">Year: {YEAR}</h3>
                <h3 className="money">Money: {MONEY}</h3>
                <h3 className="shipsOwned">Ships you own: {SHIPSOWNED}</h3>
                <h3 className="docks">Docks: {DOCKS}</h3>
                <button className="end_round_btn">End round</button>
            </div>
        </div>
    )
}

export default Ui;