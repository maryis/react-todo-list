import React from 'react';
import './App.css';
import * as ds from './DataSet'
import Task from './Task'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dset: ds.DataSet
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState(
                {
                    isLoading:false
                }
            )
        },2000)

    }

    handleClick(id) {

        this.setState((prevSate) => {
            const newState = prevSate.dset.map(item => {
                if (item.id === id)
                    item.checked = !item.checked
                return item
            })
            return newState
        })
    }

    render() {

        let dset = this.state.dset.map(item => <Task key={item.id} item={item} handleClick={this.handleClick}/>)

        return (

             this.state.isLoading ? <p>is loading</p> :
            <div>
                {
                    dset
                }
            </div>
        )
    }
}

export default App;
