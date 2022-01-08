/* eslint-disable default-case */
const initialStateValue = 0

const reducer = (state = initialStateValue, action) => {
   switch(action.type){
       case "deposit":
           return state + action.payload;
           case "withdrawal":
               return state - action.payload;
               default: 
               return state

   }
}

export default reducer