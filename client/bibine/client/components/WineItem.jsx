import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Media} from 'react-bootstrap';

const WineItem = ({onClick, wine}) => (
    <div className='wine-box'>
    <div className='wine-item'>
    <Media>
    <Media.Left>
      <img width={64} height={64} src="src/client/img/wine-placeholder.png" alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>{wine.name}, {wine.vintage}</Media.Heading>
      <p> {wine.type} </p>
    </Media.Body>
  </Media>
  </div>
  </div>
  )

  
  WineItem.propTypes = {
    wine: PropTypes.object
  };
  
export default WineItem;
  