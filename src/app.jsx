import '../styles/index.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  ResumePage,
  TaskPage
} from './components/page';
import Footer from './components/footer';
import Header from './components/header';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = { headline: null };
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

  setHeadLine(headline) {
    if (this.state.headline !== headline) {
      this.setState({ headline: headline });
    }
  }

  render() {
    return (
      <Router>
        <div className="container-fluid platinum-text flow-text lucida-text">
          <Header data={this.state.headline} />
          <div className="row">
            <div className="col s12 m4 l3 no-padding">
              <aside className="little-menu black brutal-border-dark">
                <nav className="simple">
                  <ul className="flow-text">
                    <li><Link className="smaller spread red-text" to="/">About me</Link></li>
                    <li><Link className="smaller spread red-text" to="/example">Example</Link></li>
                  </ul>
                </nav>
              </aside>
            </div>

            <main className="col s12 m8 l9 no-padding">
              <article>
                <Route exact path="/" component={(props) => <ResumePage {...props} headlineCallBack={this.setHeadLine.bind(this)}/>} />
                <Route path="/example" component={(props) => <TaskPage {...props} headlineCallBack={this.setHeadLine.bind(this)}/>} />
              </article>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
