import '../styles/index.scss';
import React from 'react';
import data from './data_source';
import Header from './components/header';
import Footer from './components/footer';
import CompositeRenderer from './components/composite-renderer';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  scrollToTop() {
    /* Don't remember scroll position onReload;
        needs to make correct shift.
    */
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 100);
  }

  componentWillMount() {
    this.setState(data);
    this.scrollToTop();
  }

  makeDocument() {
    let black_list = ['headline'];
    let document = Object.entries(this.state).map( (item, index, arr) => {
      if (black_list.indexOf(item[0]) >= 0) {
        return (<div key={index}>&nbsp;</div>);
      }
      return (
        <div key={index}>
          <h2 className="platinum border-solid-thick black-text allcaps shrink text-center spread heavy">{item[0]}</h2>
          <CompositeRenderer data={item[1]} />
        </div>
      );
    });
    return (<div>{document}</div>);
  }

  render() {
    return (
      <div className="container-fluid">
        <Header headline={this.state.headline} />
        <main className="platinum-text flow-text lucida-text">
          <div>
            {this.makeDocument()}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
