const redux = require('redux');
const createStore = redux.createStore;

const initailState = {
  numberOfBooks: 10,
  numberOfPens: 15

}
// Action Creator
function buyBook() {
  return {
    // Action
    type: "Buy_Book",
    payload: 'My first Action'
  }
}

function buyPen() {
  return {
    // Action
    type: "Buy_Pen",
    payload: 'My first Action'
  }
}

// (prevState, action) => newState

const Reducer = (state=initailState, action) => {
  switch(action.type) {
    case 'Buy_Book': return {
      ...state,
      numberOfBooks: state.numberOfBooks - 1
    }

    case 'Buy_Pen': return {
      ...state,
      numberOfPens: state.numberOfPens - 2
    }

    default: return state;
  }
}


const store = createStore(Reducer);
console.log("Initial State Value", store.getState() );
const unsbuscribe = store.subscribe(()=> console.log("Update state value", store.getState()));
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsbuscribe();
