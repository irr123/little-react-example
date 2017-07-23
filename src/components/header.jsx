import React from 'react';


export default class Header extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     headline: null
  //   };
  // }

  // componentWillMount() {
  //   this.setState({
  //     headline: this.props.data
  //   });
  // }

  render() {
    return (
      <div className="row">
        <div className="col s2">
          &nbsp;
        </div>
        <div className="col s8">
          <h1 className="flow-text allcaps fittext skew-right platinum-text black comic-sans-text heavy padding baffle-prolonged">
            {this.props.data}
          </h1>
        </div>
        <div className="col s2">
          &nbsp;
        </div>
      </div>
    );
  }
}
