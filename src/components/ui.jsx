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
    const WOOL = props.data.inventory.wool
    const TEXTILES = props.data.inventory.textiles
    const COAL = props.data.inventory.coal
    const IRON = props.data.inventory.iron
    const SALT = props.data.inventory.salt
    const GRAIN = props.data.inventory.grain
    const FISH = props.data.inventory.fish
    const TIMBER = props.data.inventory.timber
    const SLAVES = props.data.inventory.slaves

    return (
        <div className="ui-container">

            <div className="ui-inventory">
                <h3>Your Inventory:</h3>
                <p>Wool: {WOOL}</p>
                <p>Textiles: {TEXTILES}</p>
                <p>Coal: {COAL}</p>
                <p>Iron: {IRON}</p>
                <p>Salt: {SALT}</p>
                <p>Grain: {GRAIN}</p>
                <p>Fish: {FISH}</p>
                <p>Timber: {TIMBER}</p>
                <p>Slaves: {SLAVES}</p>
            </div>

            <div className="ui-stats">
                <h3 className="year">Year: {YEAR}</h3>
                <h3 className="money">Money: {MONEY}</h3>
                <h3 className="shipsOwned">Ships you own: {SHIPSOWNED}</h3>
                <h3 className="docks">Docks: {DOCKS}</h3>

                <h4>Round: {props.roundCounter}</h4>

            </div>
        </div>
    )
}

export default Ui;