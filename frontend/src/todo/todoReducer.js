const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}