import React, {Component} from "react";
import {connect} from "react-redux";
import Todo from "./Todo";
import {onToggleDelete, setToggleDone, setToggleImportant} from "../../actions/action";

class TodoContainer extends Component {

    render() {
        const { todo, setToggleDone, setToggleImportant, onToggleDelete } = this.props;
        return <Todo setToggleDone={setToggleDone} setToggleImportant={setToggleImportant} onToggleDelete={onToggleDelete} todo={todo}/>
    }
}

const mapStateToProps = (state) => ({
    todo: state.todo
});
const mapDispatchToProps = {
    setToggleDone, setToggleImportant, onToggleDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)