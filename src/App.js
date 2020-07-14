import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const logo = 'Fireplace Market'

    const cardClass = 'card'

    const superDeluxe = {
      name: 'Super Deluxe Propane'
    }

    console.log(superDeluxe)

    return (
      <div className='App'>
        <h1>{logo}</h1>
        <div className={cardClass}>
          <h2>{superDeluxe.name}</h2>
        </div>
        <div className={cardClass}>
          <h2>Mega Ultra Natural Gas</h2>
        </div>
        <div className={cardClass}>
          <h2>The Fuegonator</h2>
        </div>
      </div>
    );
  }
}

export default App;
