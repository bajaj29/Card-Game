const { default: RootReducer } = require("./RootReducer");
const { applyMiddleware, createStore } = require("redux");
const { default: logger } = require("redux-logger");
const { default: thunk } = require("redux-thunk");

const Store = createStore(RootReducer, applyMiddleware(logger, thunk))

export default Store