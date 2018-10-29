import React from 'react';
import PropTypes from 'prop-types';

// () for implicite return != {}
const Category = ({categoryName}) => (
  <sections>
  <h1>Category page: {categoryName} </h1> 
  </sections>
);
Category.PropTypes = {
  categoryName:
  PropTypes.string.isRequired,
};
export default Category;
