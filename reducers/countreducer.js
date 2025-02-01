import React from "react";

const intialState = {
    count:0
};

const countreducer = (state = intialState , action) => {
 switch(action.type){
 case'increment':
  return { ...state , count: state.count +10  
 };
 
 case 'decrement':
    return {
    ...state, count: state.count -10
    };
    default:
    return state;


};
};

export default countreducer;