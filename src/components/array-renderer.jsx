import React from 'react';
import ObjectRenderer, { isObject } from './object-renderer';
import EnumRenderer from './enum-renderer';


export class ArrayItemRenderer extends React.Component {

  selectRepresenter(item) {
    if (isObject(item)) {
      return (<ObjectRenderer data={item} />);
    }
    return (<EnumRenderer data={item} />);
  }

  render() {
    let ret = this.selectRepresenter(this.props.data);
    return (<li className="courier-new-text cherry platinum-text">{ret}</li>);
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
