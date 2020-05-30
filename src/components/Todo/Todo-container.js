import React, {Component} from "react";
import {connect} from "react-redux";
import Todo from "./Todo";

class TodoContainer extends Component {

    render() {
        const {todo} = this.props;
        return <Todo todo={todo}/>
    }
}

const mapStateToProps = (state) => ({
    todo: state.todo
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)