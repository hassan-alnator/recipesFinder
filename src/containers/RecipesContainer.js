import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipesBook from '../components/RecipesBook'

import { getRecipeByKeyword, resetNotification } from '../actions';

const mapStateToProps = ({ recipes, isLoading, notifications }, ownProps) => ({
    recipes,
    isLoading,
    notifications
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getRecipeByKeyword: (searchTerm) => {
        dispatch(getRecipeByKeyword(searchTerm))
    },
    resetNotification: () => {
        dispatch(resetNotification())
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipesBook);

