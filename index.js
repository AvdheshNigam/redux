const redux = require('redux');
const createStore = redux.createStore;

//const Buy_Book = "Buy_Book1";

const initailState = {
  numberOfBooks: 10
}
// Action Creator
function buyBook() {
  return {
    // Action
    type: "Buy_Book",
    info: 'My first redux code'
  }
}

// (prevState, action) => newState

const Reducer = (state=initailState, action) => {
  switch(action.type) {
    case 'Buy_Book': return {
      ...state,
      numberOfBooks: state.numberOfBooks - 1
    }

    default: return state;
  }
}


const store = createStore(Reducer);
console.log("Initial State Value", store.getState() );
const unsbuscribe = store.subscribe(()=> console.log("Update state value", store.getState()));
store.dispatch(buyBook());
store.dispatch(buyBook());
unsbuscribe();
