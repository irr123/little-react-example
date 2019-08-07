import React from 'react';
import CompositeRenderer from './composite-renderer';
import resume_data from '../data_sources/resume_source';
import readme_data from '../data_sources/readme_source';


export class ResumePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState(resume_data);
  }

  componentDidMount() {
    this.props.headlineCallBack(this.state.headline);
  }

  makeDocument() {
    let black_list = ['headline'];
    let document = Object.entries(this.state).map( (item, index) => {
      if (black_list.indexOf(item[0]) >= 0) {
        return (<div key={index}>&nbsp;</div>);
      }
      return (
        <section key={index}>
          <h2 className="platinum border-solid-thick black-text allcaps shrink text-center spread heavy">{item[0]}</h2>
          <CompositeRenderer data={item[1]} />
        </section>
      );
    });
    return (<div>{document}</div>);
  }

  render() {
    return (
      <div>
        {this.makeDocument()}
      </div>
    );
  }
}

export class ReadMePage extends ResumePage {

  componentWillMount() {
    this.setState(readme_data);
  }
}

