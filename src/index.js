// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   // <React.StrictMode>
//   <App />
//   // </React.StrictMode>
// )

const redux = require('redux')

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  }
}

const store = redux.createStore(counterReducer)

console.log(store.getState())

const coutnerSubscriber = () => {
  const latestState = store.getState()
  console.log(latestState)
}

store.subscribe(coutnerSubscriber)

store.dispatch({ type: 'increment' })
