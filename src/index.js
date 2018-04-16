import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import users from './employees';




ReactDOM.render(<App initialData={users}/>, document.getElementById('root'));


