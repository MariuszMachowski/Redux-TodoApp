import React from 'react';
import FilterButton from './FilterButton';
import types from '../todos/types';
import '../styles/FilterButtons.css'

const FilterButtons = () => {
    return (
        <div className="buttonWrap">
            <FilterButton text="all" filter={types.SHOW_ALL} />
            <FilterButton text="active" filter={types.SHOW_ACTIVE} />
            <FilterButton text="completed" filter={types.SHOW_DONE} />
        </div>
    );
}

export default FilterButtons;