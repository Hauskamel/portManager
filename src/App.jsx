import Ui from "./components/ui.jsx";
import Text from "./components/text.jsx";
import {useState} from "react";


function App(data) {

    const [round, setRound] = useState(1)

    function endRound () {
        const newRound = round + 1
        setRound(newRound)
        return newRound;
    }

    return (
        <>
            <Ui
                data={data}
                roundCounter={round}
            />
            <Text/>


            <button className="end_round_btn" onClick={endRound}>End round</button>
        </>
    )

}

export default App
