import React from 'react';
import ArrayRenderer from './array-renderer';
import EnumRenderer from './enum-renderer';

export const isObject = (val) => {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
};

const selectRepresenter = (value) => {
  if (Array.isArray(value)) {
    return (
      <ArrayRenderer data={value} />
    );
  }
  if (isObject(value)) {
    return (
      <ObjectRenderer data={value} />
    );
  }
  return (
    <EnumRenderer data={value} />
  );
};

class ObjectItemRenderer extends React.Component {

  render() {
    let value_representer = selectRepresenter(this.props.data);
    return (
      <div className="row">
        <div className="col s6 m4 text-right spread heavy">
          {this.props.name}&nbsp;:
        </div>
        <div className="col s6 m8">{value_representer}</div>
      </div>
    );
  }
}

export default class ObjectRenderer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      data: Object.entries(this.props.data).map( (item, index, arr) => {
        return (
          <ObjectItemRenderer key={index} name={item[0]} data={item[1]} />
        );
      })
    });
  }

  render() {
    return (
      <div className="row">
        <ul className="full-width padding square tomato black-text border-dashed-thick">
          {this.state.data}
        </ul>
      </div>
    );
  }
}
