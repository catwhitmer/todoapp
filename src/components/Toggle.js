import React from 'react'

class Toggle extends React.Component {

    state = {
        toggleOn: true
    }

    handleClick = () => {
        this.setState({toggleOn: !this.state.toggleOn})
  }

    render() {
        return (
            <div>
                <button onClick ={this.handleClick}> {this.state.toggleOn ? "ON" : 'OFF'} </button>
            </div>
        )
    }
}

export default Toggle