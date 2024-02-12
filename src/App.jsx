import Ui from "./components/ui.jsx";
import Text from "./components/text.jsx";
import {useState} from "react";
import Trader from "./components/trader.js";


function App(data) {

    const [round, setRound] = useState(data.data.round)
    const [year, setYear] = useState(data.data.year)

    function endRound() {
        const newRound = round + 1
        setRound(newRound)

        if (round < 2) {

            let trader1GoodsSell = {
                slaves: 10,
                corn: 50,
                soap: 20
            }

            let trader1GoodsBuy = {
                textiles: 15,
                wood: 10,
                iron: 5,
                fis: 2
            }

            const trader1 = new Trader("Humboldt", true, trader1GoodsSell, trader1GoodsBuy)

        }

        if (round % 4 === 0) {
            const newYear = year + 1
            setYear(newYear)
            return newYear
        }

        return newRound;
    }

    return (
        <>
            <div className="main-container">
                <Ui
                    data={data}
                    year={year}
                    roundCounter={round}
                />
                <Text round={round}/>
            </div>

            <button className="end_round_btn" onClick={endRound}>End round</button>
        </>
    )

}

export default App
