function Text(props) {

    if (props.round < 2) {
        return (
            <>
                <div className="text-container">
                    <p className="main-text">This is your port. In the first round, no trades will be made.
                        You can use the time to look at your inventory, maybe lookout for things you want to trade.
                        If you are finished just click "End round" to get started.
                    </p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="text-container">
                    <p className="main-text">You moved past the first round.</p>
                </div>
            </>
        )
    }
}

export default Text;