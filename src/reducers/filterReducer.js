const filterReducer = (state = "", action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.data
        default:
            return state
    }
}

export const updateSearch = (content) => {
    return {
        type: "NEW_SEARCH",
        data: content
    }
}

export default filterReducer