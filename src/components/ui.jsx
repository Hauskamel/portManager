import "../component_styles/ui.css";
import {useState} from "react";
// import endYear from "../functions/end-year.js";

function Ui (props) {
    let YEAR = props.data.data.year;
    let MONEY = props.data.data.money;
    let SHIPSOWNED = props.data.data.shipsOwned
    let DOCKS = props.data.data.docks

    // in tons
    let INVENTORY = {
        tea: 100,
        grain: 100,
        spices: 0,
        slaves: 200,
        preciousMetals: 50
    }

    const [year, setYear] = useState(YEAR)

    function endYear () {
        YEAR = setYear( year + 1);
    }

    return (
        <div className="ui-container">

            <div className="ui-inventory">
                <h3>Your Inventory:</h3>
            </div>

            <div className="ui-stats">
                <h3 className="year">Year: {YEAR}</h3>
                <h3 className="money">Money: {MONEY}</h3>
                <h3 className="shipsOwned">Ships you own: {SHIPSOWNED}</h3>
                <h3 className="docks">Docks: {DOCKS}</h3>
                <button onClick={endYear} className="end_round_btn">End round</button>
            </div>
        </div>
    )
}

export default Ui;