import React, { Component } from 'react';
import { Row, Col, Input, Icon } from 'react-materialize'



export default class RecipesSearchBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search_term: ''
        }
    }


    /**
     * Event that is trigger on change for the search box that updates the state of search_term
     * and dispatches the search
     * @param {Object} e 
     * @memberof RecipesSearchBox
     */
    searchRecipes(e) {
        const { resetNotification, search } = this.props;
        const searchTerm = e.target.value;

        // reset Notifications
        resetNotification();

        // Update the State to reflect to the searchBox
        this.setState({
            search_term: searchTerm
        });

        // Trigger the search if there is a search term becouse the onChange even even triggers on backspace
        if (searchTerm.length > 0) {
            search(searchTerm);
        }
    }

    render() {
        return (
            <Row>
                <Col s={12}>
                    <Input placeholder="Search For ..." s={12} value={this.state.search_term} onChange={e => this.searchRecipes(e)}><Icon>search</Icon></Input>
                </Col>
            </Row>
        )
    }
}