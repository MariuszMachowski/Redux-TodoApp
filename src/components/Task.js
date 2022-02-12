import React from 'react';
import '../styles/Task.css';
const Task = ({ id, text, complete, remove, done }) => {
    return (
        <div className='task'>
            <div className="doneInfo" style={{ display: complete ? 'block' : 'none' }}>Done</div>
            <textarea type="text" value={text} />
            <i onClick={() => remove(id)} className="fas fa-times"></i>
            <i onClick={() => done(id)} class="fas fa-check"></i>
        </div>
    );
}

export default Task;