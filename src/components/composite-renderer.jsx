import React from 'react';
import ObjectRenderer, { isObject } from './object-renderer';
import TextRenderer from './text-renderer';
import ArrayRenderer from './array-renderer';


export default class CompositeRenderer extends React.Component {

  selectRepresenter(value) {
    if (Array.isArray(value)) {
      return (<ArrayRenderer data={value} />);
    }
    if (isObject(value)) {
      return (<ObjectRenderer data={value} />);
    }
    return (<TextRenderer data={value} />);
  }

  render() {
    let ret = this.selectRepresenter(this.props.data);
    return (<div>{ret}</div>);
  }
}
