const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_NOTIFICATION":
            return action.data
        case "REMOVE_NOTIFICATION":
            return null
        default:
            return state
    }
}

export const setNotification = (content) => {
    return {
        type: "SET_NOTIFICATION",
        data: content
    }
}

export const removeNotification = () => {
    return {
        type: "REMOVE_NOTIFICATION",
        data: null
    }
}

export default notificationReducer