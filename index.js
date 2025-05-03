import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const demo = ReactDOM.createRoot(document.getElementById('demo'));
class MyStyling extends React.Component {
  render() {
    const myheaderstyle = {
      color: "green",
      backgroundColor: "skyblue",
      fontFamily: "Arial",
      padding: "5px"
};
const mystyle = {
  color: "blue",
  background: "pink",
  fontFamily: "Times New Roman",
  padding: "10px"
};
return (
  <div>
    <h1 style={myheaderstyle}>Hi</h1>
    <p style={mystyle}>How are you?</p>
  </div>
);
  }
}
class Info extends React.Component {
  render () {
    return (
      <div>
        <h1 className="nstyle">Kanishk</h1>
        <p className="addstyle">Bangalore</p>
      </div>
    );
  }
}
root.render(<MyStyling/>);
demo.render(<Info />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
