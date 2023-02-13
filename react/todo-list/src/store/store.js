import { legacy_createStore } from 'redux';

const initialState=[]

const reducer = (state=initialState,action)=>{
    if(action.type === 'addUser'){
        return [...state,action.payload]
    }
    return state;

}

const store =legacy_createStore(reducer);

export default store;