import fetch from 'isomorphic-fetch';

// Pages Limit
const limit = '20';

// Server Base URL
const BaseUrl = `http://www.recipepuppy.com/api?p=${limit}`;

export default class recipesApi {

    /**
     * constructing Service URL to handle comma delimited ingredients
     * i : comma delimited ingredients
     * q : normal search query
     * p : page
     * @static
     * @param {String} term 
     * @returns 
     * @memberof recipesApi
     */
    static constructURLBySearchTerm(term) {

        // Contains a comma 
        if (term.indexOf(',') >= 0) {
            return `${BaseUrl}&i=${term}`;
        }

        // Normal Search Query
        return `${BaseUrl}&q=${term}`;
    }

    static getRecipes(term) {
        const url = encodeURIComponent(this.constructURLBySearchTerm(term));
        console.log(url);
        return fetch("http://localhost:3000/recipes", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: `url=${url}`
        })
            .then(response => response.json())
    }
}