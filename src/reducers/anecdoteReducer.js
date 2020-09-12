import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_VOTE':
            const id = action.data.id
        return state
        .map(anecdote => anecdote.id !== id ? anecdote : action.data)
        .sort((a, b) => b.votes - a.votes)
        case 'NEW_ANECDOTE':
            return [...state, action.data]
        case 'INIT_ANECDOTES':
            return action.data
            .sort((a, b) => b.votes - a.votes)
        default:
            return state
    }
}

export const addVote = (content) => {
    return async dispatch => {
        console.log(content)
        const updatedAnecdote = await anecdoteService.addLike(content)
        console.log(updatedAnecdote)
        dispatch({
            type: 'ADD_VOTE',
            data: updatedAnecdote
        })
    }
}

export const createAnecdote = (content) => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        console.log(newAnecdote)
        dispatch({
            type: 'NEW_ANECDOTE',
            data: {
                ...newAnecdote,
                votes: 0
            }
        })
    }
}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes
        })
    }
}

export default anecdoteReducer