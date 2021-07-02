import React from 'react';
import { NotificationContainer } from 'react-notifications';

import Header from '../Header';
import Movies from '../Movies';

import './App.scss';
import 'react-notifications/lib/notifications.css';

const App = () => (
    
    <div className='app'>
        <Header />
        <Movies />
        <NotificationContainer />
    </div>
);

export default App;
