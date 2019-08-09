import React from 'react';

export const isFunction = (val) => {
    if (val === null) { return false;}
    return typeof val === 'function';
};

/**
 * @see DefaultRenderer
 */
export default class PreformattedRenderer extends React.Component {

  render() {
    return (<pre className="custom-padding chocolate-strawberry">{this.props.data()}</pre>);
  }
}
