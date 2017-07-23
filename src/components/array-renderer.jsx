import React from 'react';
import CompositeRenderer from './composite-renderer';

export class ArrayItemRenderer extends React.Component {

  render() {
    return (
      <li className="cherry platinum-text">
        <CompositeRenderer data={this.props.data} />
      </li>
    );
  }
}

export default class ArrayRenderer extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      data: this.props.data.map( (item, index) => {
        return (<ArrayItemRenderer key={index} data={item} />);
      })
    });
  }

  render() {
    return (
      <div className="row">
        <ul className="black-text full-width padding border-dotted-thick tags platinum">
          {this.state.data}
        </ul>
      </div>
    );
  }
}
