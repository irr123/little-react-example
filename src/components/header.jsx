import React from 'react';


export default class Header extends React.Component {
  static get defaultProps() {
    return { headline: 'No headline' };
  }

  render() {
    return (
      <div className="row">
        <h1 className="flow-text allcaps center skew-right green-apple comic-sans-text heavy padding baffle-longer">{this.props.headline}</h1>
      </div>
    );
  }
}
