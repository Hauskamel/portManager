function Text(props) {

    if (props.round < 2) {
        return (
            <>
                <p>This is the first round.</p>
            </>
        )
    } else {
        return (
            <>
                <p>You moved past the first round.</p>
            </>
        )
    }
}

export default Text;