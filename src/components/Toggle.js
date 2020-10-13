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
                <button className={'toggleButton'} onClick ={this.handleClick}> {this.state.toggleOn ? "NEED TO DO" : 'DONE'} </button>
            </div>
        )
    }
}

export default Toggle