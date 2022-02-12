import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import '../styles/ShowTasks.css';
import actions from '../todos/actions';
import types from '../todos/types';
const ShowTasks = ({ tasks, remove, done }) => {
    const handleRemoveTask = (id) => {
        remove(id)
    }
    const handleDoneTask = (id) => {
        done(id)
    }
    return (
        <div className="tasksContainer">
            {tasks.map(task => <Task key={task.id} done={handleDoneTask} remove={handleRemoveTask} text={task.text} id={task.id} complete={task.complete} />)}
        </div>
    );
}
const filterTasks = (tasks, filter) => {
    switch (filter) {
        case types.SHOW_ACTIVE:
            return tasks.filter(task => task.complete === false)
        case types.SHOW_DONE:
            return tasks.filter(task => task.complete === true)
        default:
            return tasks
    }
}
const mapStateToProps = (state) => ({
    tasks: filterTasks(state.tasks, state.filter)
})
const mapDispatchToProps = (dispatch) => ({
    remove: (id) => dispatch(actions.removeTask(id)),
    done: (id) => dispatch(actions.doneTask(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ShowTasks);