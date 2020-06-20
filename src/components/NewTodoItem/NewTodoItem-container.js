import React, {Component} from "react";
import {connect} from "react-redux";
import {onAddItem} from "../../actions/action";
import NewTodoItem from "./NewTodoItem";

class NewItemContainer extends Component {

    render() {
        const {newItemText, onAddItem } = this.props;

        return <NewTodoItem onAddItem={onAddItem} newItemText={newItemText}/>
    }
}

const mapStateToProps = (state) => ({
    newItemText: state.newItemText
});

const mapDispatchToProps = {
    onAddItem
};
export default connect(mapStateToProps, mapDispatchToProps)(NewItemContainer)