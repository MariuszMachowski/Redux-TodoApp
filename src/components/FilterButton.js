import React from 'react'
import '../styles/FilterButton.css';
import actions from '../todos/actions';
import { connect } from 'react-redux';
const FilterButton = ({ text, change, filterBtn, filter }) => {
    return (
        <button disabled={filterBtn === filter} onClick={change} className='filter'>{text}</button>
    );
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    change: () => dispatch(actions.changeFilter(ownProps.filter))
})
const mapStateToProps = (state) => ({
    filterBtn: state.filter
})
export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);