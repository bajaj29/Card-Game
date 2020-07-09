const { default: MainPageReducer } = require("../main-page/MainPageReducer");
const { combineReducers } = require("redux");
const { default: CardTableReducer } = require("../card-table/CardTableReducer");

const RootReducer = combineReducers({
    cardTable : CardTableReducer,
    main : MainPageReducer
})

export default RootReducer