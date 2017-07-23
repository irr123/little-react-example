import React from 'react';
import task_data from '../task_source';
import resume_data from '../resume_source';
import CompositeRenderer from './composite-renderer';


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
        <article key={index}>
          <h2 className="platinum border-solid-thick black-text allcaps shrink text-center spread heavy">{item[0]}</h2>
          <CompositeRenderer data={item[1]} />
        </article>
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

export class TaskPage extends ResumePage {

  componentWillMount() {
    this.setState(task_data);
  }
}
