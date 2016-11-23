require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Metronome from './Metronome';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Metronome/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
