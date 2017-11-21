import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import './components/EmailForm.css';
import './components/EmailList.css';
import './components/EmailListItem.css';
import './components/EmailView.css';



export default class App extends Component {

  constructor(){
    super();
    this.state = {emailData: []};
    this.fetchData = this.fetchData.bind(this);

  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    let me = this;
    axios.get('http://localhost:9090/emails')
      .then(function (response) {
        console.log(response.data);
        me.setState({emailData: response.data});
      })
      .catch(function (error) {
        console.log(error);
        this.emailData = [];
      });

    // this.setState({emailData: emailData})
    // console.log(emailData)


  }

  render() {
    let emails = this.state.emailData.map((email, key)=>{

      return (<li key={key}>
          <div className="email-list-item">
              <span>{email.from}</span>
              <span>{email.subject}</span>
          </div>
        </li>);
    });

    return (
      <main className="app">
        <ul className="email-list">
            {emails}
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

