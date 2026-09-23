import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
// import bank from './Bank'
// import products from './Product'
import translator from 'src/store/Translator'
class Store {
    constructor() {
        const reducers = combineReducers({
            // bank:bank.bankReducer,
            // products:products.productsReducer,
            language:translator.translateReducer
        })

        this.store = legacy_createStore(reducers,applyMiddleware(thunk))

        this.store.subscribe(() => {
            let objects = this.store.getState()
            Object.keys(objects).forEach(key => {
                localStorage.setItem(`${key}`, JSON.stringify(objects[key]))
            });
            // localStorage.setItem("reduxState", JSON.stringify(this.store.getState()))
        })
    }

    
    
    subscribe = (callback) => {
        return this.store.subscribe(callback)
    }

    dispatch = (action) => {
        return this.store.dispatch(action)
    }

    getState = () => {
        return this.store.getState()
    }

}

const store = new Store()
export default store
// // ----------------------------------------------------------------------
// // Actions :
// const inc = (amount) => {
//         return {
//             type:'increment',
//             payload: amount
//         }
// }
// const dec = (amount) => {
//         return {
//             type:'decrement',
//             payload: amount
//         }
// }
// // -------------------------------------------------------------------




// // ------------------------------------------------------------------
// // Reducers: 
// const reducer = (state=1000,action) => {
//     switch(action.type) {
//         case 'increment': return state + action.payload;
//         case 'decrement': return state - action.payload;
//         default: return state
//     } 
// }
// // -----------------------------------------------------------------

// const reducers = combineReducers({
//     bank:reducer
// })

// const store = legacy_createStore(reducers)
// // -----------------------------------------------

// // Subscribes:
// // ------------------------------------------------------------------------
// store.subscribe(() => {
//   localStorage.setItem("reduxState", JSON.stringify(store.getState()))
// })
// // --------------------------------------------------------------------------
// // Exports:

// export default store
// export {inc,dec}