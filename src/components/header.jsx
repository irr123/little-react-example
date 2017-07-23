import React from 'react';


export default class Header extends React.Component {
  static get defaultProps() {
    return { headline: 'No headline' };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s2">
            &nbsp;
          </div>
          <div className="col s10">
            <h1 className="flow-text allcaps fittext skew-right platinum-text black comic-sans-text heavy padding baffle-longer">{this.props.headline}</h1>
          </div>
        </div>
      </div>
    );
  }
}
