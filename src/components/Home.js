import React from 'react';
import { connect } from 'react-redux';
import { changeState } from '../store/action/action.js';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    _changeState = () => {
        this.props.changeStateToReducer(this.state.name); // Pass Component state value
        this.setState({
            name: ''
        })
    }
    _changeUserInput = (e) => {

        const name = e.target.value;
        this.setState(
            { name: name }
        );

    }
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <p>Take a look around</p>
                <input type='text' name='name' value={this.state.name} onChange={this._changeUserInput} />
                <button onClick={this._changeState}>Change State</button>
                {/* This props access from mapStateToProps function  */}
                <h2>{this.props.userName} </h2>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        userName: state.userReducer.name  // userReducer is Reducer that define in REDUCER section
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        changeStateToReducer: (updateUserName) => {
            dispatch(changeState(updateUserName)) // This changeState function import From Action
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);