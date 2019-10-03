import React from 'react'

class Task extends React.Component {


    render() {


        const checkedStyle = {
            color: "#888888",
            fontStyle:"italic",
            textDecoration:"line-through"
        }
        return (
            <div >
                <input type="checkbox" checked={this.props.item.checked} onChange={() => {
                    this.props.handleClick(this.props.item.id)
                }}/>
                <p style={this.props.item.checked ? checkedStyle : null}>            {this.props.item.title}
                </p>
            </div>
        )
    }
}

export default Task;