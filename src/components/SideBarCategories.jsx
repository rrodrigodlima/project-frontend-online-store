import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideBarCategories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        {
          categories.map(({ name, id }) => (
            <label data-testid="category" key={ id } htmlFor={ id }>
              {name}
              <input
                name="categoria"
                id={ id }
                type="radio"
              />
            </label>
          ))
        }
      </div>
    );
  }
}

SideBarCategories.propTypes = {
  categories: PropTypes
    .arrayOf(PropTypes
      .shape({
        id: PropTypes.string,
        name: PropTypes.string,
      })),
};

SideBarCategories.defaultProps = {
  categories: [{ id: '', name: '' }],
};

export default SideBarCategories;
