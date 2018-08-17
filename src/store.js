const NEW_CURRENT_USER = 'NEW_CURRENT_USER';

const initialState = {
    currentUser: '',    
}

export const actions = {
    newCurrentUser(newUser) {
        return {
            type: NEW_CURRENT_USER,
            newUser
        }
    }
}


export const reducer = (state = initialState, action) => {

    switch(action.type) {
        case NEW_CURRENT_USER: {
            let user = action.newUser
            return {
                currentUser: {
                    id: user.id,
                    first: user.first,
                    last: user.last,
                    age: user.age,
                    location: user.location,
                    description: user.description
                }
            }
        }
        default: return state;
    }
}