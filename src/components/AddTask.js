import React from 'react';
import { connect } from 'react-redux';
import actions from '../todos/actions';
import '../styles/AddTask.css';
const AddTask = ({ add }) => {
    const inputTask = React.createRef();
    const handleAddTask = (e) => {
        e.preventDefault();
        if (inputTask.current.value === "") {
            return alert("you are adding an empty task!")
        }
        add(inputTask.current.value);
        inputTask.current.value = "";
    }
    return (
        <form onSubmit={handleAddTask}>
            <input type="text" ref={inputTask} placeholder="your task..." />
            <button type="submit"><i className="fas fa-plus"></i></button>
        </form>
    );
}
const mapDispatchToProps = (dispatch) => ({
    add: (text) => dispatch(actions.addTask(text))
})
export default connect(null, mapDispatchToProps)(AddTask);