import React from 'react'

class Like extends React.Component {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> {this.state.count}</button>
            </div>
        )
    }
}

export default Like