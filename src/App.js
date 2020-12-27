
import './App.css';

import Router from './Components/router';

import cartReducer from './Components/reducers/cartReducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);


function App() {
  return (
    <Provider store={store}>
       <Router/>
    </Provider>
  );
}

export default App;
