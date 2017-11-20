import React, {PureComponent} from 'react';
import './App.css';
import './components/EmailForm.css';
import './components/EmailList.css';
import './components/EmailListItem.css';
import './components/EmailView.css';



export default class App extends PureComponent {
  render() {
    return (
      <main className="app">
        <ul className="email-list">
          <li>
            <div className="email-list-item">
              <span>alittle0@gmail.com</span>
              <span>Mauris lacinia sapien quis libero.</span>
            </div>
          </li>

          <li>
            <div className="email-list-item">
              <span>bray1@gmail.com</span>
              <span>Mauris ullamcorper purus sit amet nulla.</span>
            </div>
          </li>

          <li>
            <div className="email-list-item">
              <span>dmccoy2@bluehost.com</span>
              <span>Suspendisse potenti.</span>
            </div>
          </li>

        </ul>

          <section className="email-view">
            <h2>View selected email</h2>
          </section>
          
          <div className="email-form">
            <h2>Add a new email</h2>
          </div>
          
      </main>
    );
  }
}

