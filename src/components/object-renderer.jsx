import React from 'react';
import CompositeRenderer from './composite-renderer';


export const isObject = (val) => {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
};

class ObjectItemRenderer extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col s6 m4 text-right spread heavy">
          {this.props.name}&nbsp;:
        </div>
        <div className="col s6 m8"><CompositeRenderer data={this.props.data} /></div>
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