import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    todo: () => ({
        description: 'Jogar MK',
        list: [{
            _id: 1,
            description: 'Pagar fatura',
            done: true
        }, {
            _id: 2,
            description: 'Assistir',
            done: false
        }, {
            _id: 3,
            description: 'Jogar',
            done: false
        }]
    })
})

export default rootReducer