import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: "this is state text",
            cat: "0"
        }
    }
    update( e ) {
        this.setState({txt: e.target.value})
    }
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <Widget update={this.update.bind(this)}/>
                <Widget update={this.update.bind(this)}/>
                <p>{this.state.txt} - {this.state.cat}</p>
            </div>
        )
    }
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />

//const App = () => <h1>Hello stateless</h1>

// The primary difference between a class component and a stateless component is thas class component can have STATE

App.propTypes = {
    txt: React.PropTypes.string,
}

App.defaultProps = {
    txt: "default text"
}

export default App
