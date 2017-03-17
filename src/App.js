import React from 'react';

class App extends React.Component {
    render(){
        let txt = this.props.txt
        return (
            <div>
                <h1>Hello World</h1>
                <span>{txt}</span>
            </div>
        )
    }
}

//const App = () => <h1>Hello stateless</h1>

// The primary difference between a class component and a stateless component is thas class component can have STATE

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "default text"
}

export default App
