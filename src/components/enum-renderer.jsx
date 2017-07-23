import React from 'react';


export class BooleanRenderer extends React.Component {
  render() {
    let ret = Boolean(this.props.data) ? 'Yep' : 'Nope';
    let style = `${Boolean(this.props.data) ? 'pumpkin-spice' : 'pink'} platinum-text`;
    return (<span className={style}>{ret}</span>);
  }
}

export class DefaultRenderer extends React.Component {

  render() {
    return (<span className="cherry platinum-text">{this.props.data}</span>);
  }
}

export default class EnumRenderer extends React.Component {

  selectRepresenter(value) {
    if (typeof value === 'boolean') {
      return (<BooleanRenderer data={value} />);
    }
    return (<DefaultRenderer data={value} />);
  }

  render() {
    let ret = this.selectRepresenter(this.props.data);
    return (<span>{ret}</span>);
  }
}
