const redux = require('redux');
const createStore  = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const initialState = {
  loading: false,
  users:[],
  error: ''
}

// Action Type
const USER_REQUEST = 'USER_REQUEST';
const USER_SUCCESS = 'USER_SUCCESS';
const USER_ERROR = 'USER_ERROR';

const userRequest = () => {
  return {
    type: USER_REQUEST
  }
}

// Action Createor
const userSuccess = (users) => {
  return {
    type: USER_SUCCESS,
    payload: users
  }
}

const userError = (error) => {
  return {
    type: USER_ERROR,
    payload: error
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'USER_REQUEST': return {
      ...state, 
      loading: true
    }

    case 'USER_SUCCESS': return {
        loading: false,
        users:action.payload,
        error: ''
    }

    case 'USER_ERROR': return {
      loading: false,
      users:[],
      error: action.payload
    }
  }
}

const fetchUser = () => {
  return function(dispatch) {
    dispatch(userRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      //respose data
      const users = res.data.map(user=>user.name);
      dispatch(userSuccess(users));
    })
    .catch(error=>{
      // error message
      dispatch(userError(error.message));
    })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const unsbuscribe = store.subscribe(() => {console.log('subscribe', store.getState())});
store.dispatch(fetchUser());