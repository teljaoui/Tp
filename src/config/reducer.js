const initialState = {
    users: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_user":
            return { ...state, users: [...state.users, action.payload] }
        case "Update_user":
            const user = state.users.find((u) => u.id === parseInt(action.payload.id))
            if (user) {
                user.designation = action.payload.designation
                user.pu = action.payload.pu
                user.Quantite = action.payload.Quantite
            }
            return state
        case "Delete_user":
            return { ...state, users: [...state.users.filter((u) => u.id !== parseInt(action.payload))] }
        case "DeletAllAction":
            return {...state , users: []}
        default:
            return state
    }
}
export default reducer