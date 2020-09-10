const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_VOTE':
            const id = action.data.id
            const anecdoteToChange = state.find(n => n.id === id)
            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1
            }
        return state
        .map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
        .sort((a, b) => b.votes - a.votes)
        case 'NEW_ANECDOTE':
            return [...state, action.data]
        case 'INIT_ANECDOTES':
            return action.data
        default:
            return state
    }
}

export const addVote = (id) => {
    return {
        type: 'ADD_VOTE',
        data: { id }
    }
}

export const createAnecdote = (content) => {
    console.log(content)
    return {
        type: 'NEW_ANECDOTE',
        data: {
            content,
            id: getId(),
            votes: 0
        }
    }
}

export const initializeAnecdotes = (anecdotes) => {
    return {
        type: 'INIT_ANECDOTES',
        data: anecdotes
    }
}

export default anecdoteReducer