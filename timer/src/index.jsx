import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components/App';
// import rootReducer from "./store/rootReducer";


// ReactDOM.render(
//     <Provider store={state}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// );
ReactDOM.render(<Provider store={rootReducer}>
    <App />
</Provider>, document.getElementById("root"));