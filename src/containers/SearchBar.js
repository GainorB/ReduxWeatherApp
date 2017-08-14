import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            term: ''
        };
        
        // binding context
            // "this" is the instance of SearchBar has a function call onInputChange
            // bind that function to "this" which is SearchBar
            // and replace onInputChange with this new bound instance of this function
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // all DOM event handlers come along with an event object
    onInputChange(e){
        this.setState({ term: e.target.value });
    }

    // make sure to bind "this" in constructor when passing callbacks that make references to "this"
    onFormSubmit(e){
        // prevent browser from submitting form
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        // clear search input
        this.setState({ term: '' });
    }

    // turn input into Controlled Field: a form element when the value of the input is set by the state of component

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        className="form-control" 
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        placeholder="Get a 5-day forecase in your favorite cities"
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null? we don't care for state and mapDispatchToProps has to be the 2nd parameter
export default connect(null, mapDispatchToProps)(SearchBar);