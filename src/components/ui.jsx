function Ui (props) {

    console.log(props.data.data.year)
    const YEAR = props.data.data.year;
    const MONEY = props.data.data.money;
    const SHIPSOWNED = props.data.data.shipsOwned
    const DOCKS = props.data.data.docks

    return (
        <div className="ui-container">
            <h3 className="year">Year: {YEAR}</h3>
            <h3 className="money">Money: {MONEY}</h3>
            <h3 className="shipsOwned">Ships you own: {SHIPSOWNED}</h3>
            <h3 className="docks">Docks: {DOCKS}</h3>
        </div>
    )
}

export default Ui;