import '../styles/index.scss';
import React from 'react';
import data from './data_source';
import Header from './components/header';
import Footer from './components/footer';
import ObjectRenderer from './components/object-renderer';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState(data);
  }

  makeDocument() {
    let black_list = ['test0', 'headline'];
    let document = Object.entries(this.state).map( (item, index, arr) => {
      if (black_list.indexOf(item[0]) >= 0) {
        return (
          <div key={index}>&nbsp;</div>
        );
      }
      return (
        <div key={index}>
          <h2 className="white black-text allcaps shrink text-center spread heavy">{item[0]}</h2>
          <hr className="full-width thick black" />
          <ObjectRenderer data={item[1]} />
        </div>
      );
    });
    return (
      <div>
        {document}
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid strawberry">
        <Header headline={this.state.headline} />
        <main className="mint-text flow-text courier-new-text">
          <div>
            {this.makeDocument()}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
