class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLogged: false
    };
  }

  handleLoginClick() {
    this.setState({
      isLogged: true
    });
  }

  handleLogoutClick() {
    this.setState({
      isLogged: false
    });
  }

render() {
    const isLogged = this.state.isLogged;
    let button;
    if(isLogged){
        button = <LogoutButton onClick = {this.handleLogoutClick} />
    }
    else{
        button = <LogoutButton onClick = {this.handleLoginClick} />
    }

    return (
        <div>
            <Greeting isLogged={isLogged}/>
                {button}
            </div>
    )

}

}
