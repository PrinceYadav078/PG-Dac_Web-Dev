import React from 'react'
import { createStore } from 'redux'

var initialState={
    categ:[]
}

const reducer=(state=initialState,action)=>{
    // console.log(action)
    switch(action.type){
        case "add":
            state.categ=action.payload
            break;
        default :
            break;
    }
    return state
}

const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
export default store