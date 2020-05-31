import React, {Component} from "react";
import {connect} from "react-redux";
import Todo from "./Todo";
import { setToggleImportant } from "../../actions/action";

class TodoContainer extends Component {

    render() {
        const { todo, setToggleImportant } = this.props;
        return <Todo setToggleImportant={setToggleImportant} todo={todo}/>
    }
}

const mapStateToProps = (state) => ({
    todo: state.todo
});
const mapDispatchToProps = {
    setToggleImportant
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)