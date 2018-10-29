import React, {
  Component
} from 'react';

import Category from './Category';

class CategoryContainer extends Component {
  componentDidMount() {
    alert('coucou');
  }
  render() {
    console.log(this.props)
     return ( 
       <Category 
       categoryName={this.props.match.params.name}
       />
    );
  }
}

export default CategoryContainer;
