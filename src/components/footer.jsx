import React from 'react';


export default class Footer extends React.Component {

  render() {
    return (
      <div className="jagged">
        <div className="row blood-orange">
          <div className="col s12 m12 l4 no-padding">
            <div className="padding flow-text vanilla-bean-text arial-black-text">
              made by <a className="lemon-lime" href="https://github.com/c1rno">c1rno</a>
            </div>
          </div>
          <div className="col s12 m12 l4 no-padding"></div>
          <div className="col s12 m12 l4 no-padding">
            <div className="padding flow-text bubble-gum-text arial-text">
              Thx to <a className="raspberry platinum-text" href="https://github.com/pinecreativelabs/Brutalist-Framework">pinecreativelabs</a> & <a className="peach-plum" href="https://github.com/alicoding/react-webpack-babel">Ali Al Dallal</a> for tooling
              <span className="lucida-text">.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
