import React, { useReducer } from 'react';
import Add from './Add-list';
import View from './View-list';
import {} from '../Store'

const Container = () => {

  const initialState = [{ id: 1, name: 'karan', email: 'karan@gamil.com' }];

  const reducer = (state = initialState, action) => {
    console.log(action.type);
    if (action.type === "AddUser")
    
      return [...state,];
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <Store.Provider value={{ state, dispatch }}>
        <Add />
        <View />
      </Store.Provider>
    </div>
  );

}

export default Container;
