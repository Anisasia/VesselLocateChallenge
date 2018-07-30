import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from '../../utils/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

function renderInput(inputProps) {
  const { classes, ref, errorState, errorHelper, ...other } = inputProps;

  return (
      <TextField
        fullWidth
        error={errorState}
        helperText={errorHelper}
        InputProps={{
          inputRef: ref,
          classes: {
            input: classes.input
          },
          ...other
        }}
      />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.Name, query, { findAllOccurrences: true, insideWords: true });
  const parts = parse(suggestion.Name, matches);

  return (
    <MenuItem button key={suggestion._id} selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.Name;
}

const styles = theme => ({
  container: {

    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'relative',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

class IntegrationAutosuggest extends React.Component {
  state = {
    errorState: false,
    errorHelper: '',
    value: '',
    isLoading: false,
    suggestions: [],
  };
  lastRequestId = null;

  loadSuggestions(value) {
    // Cancel the previous request
    if (this.lastRequestId !== null) {
      clearTimeout(this.lastRequestId);
    }

    this.setState({
      isLoading: true
    });

    // Request
    const inputValue = value.trim().toLowerCase();
    this.lastRequestId = Meteor.call('suggestVessels', inputValue, (err, vessels) => {
      if (err) {
        console.log('error loading suggestions', err)
      } else {
        this.setState((prevState) => {
          const showError = prevState.value.length > 0 && vessels.length <= 0
          return {
             errorState: showError,
             errorHelper: showError ? 'No matching vessels found!' : '',
             isLoading: false,
             suggestions: vessels}})
        }
    });
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value)
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, {suggestion}) => {
    this.props.onTargetVesselSelect(suggestion._id)
  }

  handleChange = (event, { newValue }) => {
    const clearError = newValue.length === 0;
    this.setState(prevState => {
      return {
        value: newValue,
        errorState: clearError ? false : prevState.errorState,
        errorHelper: clearError ? '' : prevState.errorHelper
      }});
  };

  render() {
    const { classes } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          classes,
          errorState: this.state.errorState,
          errorHelper: this.state.errorHelper,
          type: 'search',
          placeholder: 'Enter a vessel name',
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationAutosuggest);