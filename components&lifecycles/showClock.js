class clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date = new Date()
        }    
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date : new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hey Chirag!</h1>
        <h2>It's {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }

}

ReactDOM.render(
    <clock />,
    document.getElementById("root")
)