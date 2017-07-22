import React from 'react';

export class ArrayItemRenderer extends React.Component {

  render() {
    return (
      <li className="courier-new-text cherry-vanilla skew-right">{this.props.data}</li>
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
        <ul className="padding tags white">
          {this.state.data}
        </ul>
      </div>
    );
  }
}
