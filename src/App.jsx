import Ui from "./components/ui.jsx";
import Text from "./components/text.jsx";
import {useState} from "react";


function App(data) {
    const TRADER = [];

    const [round, setRound] = useState(data.data.round);
    const [year, setYear] = useState(data.data.year);

    function endRound() {
        const newRound = round + 1
        setRound(newRound)

        if (round % 4 === 0) {
            const newYear = year + 1
            setYear(newYear)
            return newYear
        }
        return newRound;
    }

    // function addTrader () {
    //
    // }


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
