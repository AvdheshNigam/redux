const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const initailStateBooks = {
  numberOfBooks: 10
}
const initailStatePens = {
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

const ReducerBooks = (state=initailStateBooks, action) => {
  switch(action.type) {
    case 'Buy_Book': return {
      ...state,
      numberOfBooks: state.numberOfBooks - 1
    }

    default: return state;
  }
}

const ReducerPens = (state=initailStatePens, action) => {
  switch(action.type) {
    case 'Buy_Pen': return {
      ...state,
      numberOfPens: state.numberOfPens - 2
    }

    default: return state;
  }
}
const reducer  = redux.combineReducers({
  Book: ReducerBooks,
  Pen: ReducerPens
})

const store = createStore(reducer);
console.log("Initial State Value", store.getState() );
const unsbuscribe = store.subscribe(()=> console.log("Update state value", store.getState()));
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsbuscribe();
