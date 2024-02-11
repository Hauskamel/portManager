import Ui from "./components/ui.jsx";
import Text from "./components/text.jsx";
import {useState} from "react";


function App(data) {

    const [round, setRound] = useState(1)
    const [year, setYear] = useState(1695)

    function endRound () {
        const newRound = round + 1
        setRound(newRound)

        if (round % 4 === 0) {
            const newYear = year + 1
            setYear(newYear)
            return newYear
        }

        return newRound;
    }

    return (
        <>
            <Ui
                data={data}
                year={year}
                roundCounter={round}
            />
            <Text/>


            <button className="end_round_btn" onClick={endRound}>End round</button>
        </>
    )

}

export default App
