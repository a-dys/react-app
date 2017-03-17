import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {currentEvent: '---'}
        this.update = this.update.bind(this)
    }

    update( e ){
        this.setState({currentEvent: e.type})
    }


    render(){
        return (
            <div>
                <textarea
                    onKeyPress={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchEnd={this.update}
                    onTouchMove={this.update}
                    cols="30"
                    rows="3"/>
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}



export default App
