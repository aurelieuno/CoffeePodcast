import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WineItem from './WineItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/wineActions';

export class Wines extends Component {
  componentDidMount() {
    this.props.actions.fetchWines();
  }

  render() {
    return (
      <div className="wines">
        <h1 className="wines__title">Wine List</h1>
        <ul className="wines__list">
          { this.props.wines
              .map((wine) => {
                return <WineItem key={wine.name} wine={wine} />
                // return <li key={wine.name} className="wine">{wine.name}</li>;
              })
          }
        </ul>
      </div>
    );
  }
}

Wines.propTypes = {
  wines: PropTypes.array,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    ...state.wines
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
