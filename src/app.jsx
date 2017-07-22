import '../styles/index.scss';
import React from 'react';
import data from './data_source';
import Header from './components/header';
import Footer from './components/footer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState(data);
  }

  makeDocument() {
    return (<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>);
  }

  render() {
    console.log('state', this.state);
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
