import React from 'react';


export const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

export const isBoolean = (value) => {
  return typeof value === 'boolean';
};

export class BooleanRenderer extends React.Component {

  render() {
    let ret = this.props.data ? 'Yep' : 'Nope';
    let style = `custom-padding ${this.props.data ? 'pride-gradient' : 'disabled'}`;
    return (<span className={style}>{ret}</span>);
  }
}

export class NumberRenderer extends React.Component {

  formatNumber(value) {
    return value.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g).join('_');
  }

  render() {
    let ret = this.formatNumber(this.props.data);
    return (<span className="custom-padding blueberry white-text">{ret}</span>);
  }
}

export class DefaultRenderer extends React.Component {

  render() {
    return (<span className="custom-padding chocolate-strawberry">{this.props.data}</span>);
  }
}

export default class TextRenderer extends React.Component {

  selectRepresenter(value) {
    if (isBoolean(value)) {
      return (<BooleanRenderer data={value} />);
    }
    if (isNumber(value)) {
      return (<NumberRenderer data={value} />);
    }
    return (<DefaultRenderer data={value} />);
  }

  render() {
    let ret = this.selectRepresenter(this.props.data);
    return (<span>{ret}</span>);
  }
}
