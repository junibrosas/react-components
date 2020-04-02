import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import './App.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ContactForm from './ContactForm/ContactForm';

// Base reducer
const reducer = combineReducers({
  form: reduxFormReducer
});

// Create store
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <ContactForm />
    </Provider>
  );
}

export default App;
