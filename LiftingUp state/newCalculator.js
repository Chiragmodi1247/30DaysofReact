const scales = {
  c: "Celsius",
  f: "Fahrenheit"
};

class TempratureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTempratureChange(e.target.value);
  }

  render() {
    const temprature = this.props.temprature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temprature in {scales[scale]}</legend>
        <input value={temprature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temprature: "",
      scale: "c"
    };
  }

  handleCelsiusChange(temprature) {
    this.setState({ scale: "c", temprature });
  }

  handleFahrenheitChange(temprature) {
    this.setState({ scale: "f", temprature });
  }

  render() {
    const scale = this.state.scale;
    const temprature = this.state.temprature;
    const celsius =
      scale === "f" ? tryConvert(temprature, toCelsius) : temprature;
    const fahrenheit =
      scale === "c" ? tryConvert(temprature, toFahrenheit) : temprature;
    return (
      <div>
        <TempratureInput
          scale="c"
          temprature={celsius}
          onTempratureChange={this.handleCelsiusChange}
        />
        <TempratureInput
          scale="f"
          temprature={fahrenheit}
          onTempratureChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}
