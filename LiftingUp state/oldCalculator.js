const scales = {
    C: "Celsius",
    F: "Fahrenheit"
}

class TempratureInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            temprature: ""
        }
    }
    handleChange(e) {
        this.setState({
            temprature: e.target.value
        })
    }

    render() {
        const temprature = this.state.temprature;
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>
                    Enter temprature in {scales[scale]}
                </legend>
                <input 
                value={this.state.temprature}
                onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TempratureInput scale="C"/>
                <TempratureInput scale="F"/>
            </div>
        )
    }
}