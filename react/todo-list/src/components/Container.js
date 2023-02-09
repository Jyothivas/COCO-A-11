import React from 'react';
import { Provider } from 'react-redux';
import Add from './Add-list';
import View from './View-list';
import store from '../store/store';

const Container = () => {

  return (
    <div className='App'>
      <Provider store={store}>
        <Add />
        <View />
      </Provider>
    </div>
  );

}

export default Container;
