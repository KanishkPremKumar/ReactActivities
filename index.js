import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Student extends React.Component
 {
  constructor(props)
   {
    super(props)
    this.state = {
      name: "Reena",
      grade: 5,
      favourite_color: "green",
      favourite_subject: "Math"
    };
  }
  favouriteColor = () => {
    this.setState({favourite_color: "black"});
  }
  favouriteSubject = () => {
    this.setState({favourite_subject: "English"});
  }
  render() 
  {
    return (
      <div>
        <h1>Student Details</h1>
        <p>My name is {this.state.name}</p>
        <p>I am in grade {this.state.grade}</p>
        <p>My favorite colour is {this.state.favourite_color}</p>
        <p>My favorite subject is {this.state.favourite_subject}</p>
        <button type="button" onClick={this.favouriteColor}>Click Me</button>
        <button type="button" onClick={this.favouriteSubject}>Click Me To Change Fav Subject</button>  
        </div>   
    );
  }
}
root.render(<Student/>);

reportWebVitals();