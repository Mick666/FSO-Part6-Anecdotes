import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        return anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(filter.toLowerCase()) === 0)
    })

    const addNewVote = (anecdote) => {
        const updatedAnecdote = {
            ...anecdote,
            votes: anecdote.votes + 1
        }
        dispatch(addVote(updatedAnecdote))
        const notificationMessage = `You voted for ${anecdote.content}`
        dispatch(setNotification(notificationMessage, 5))
    }    

    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            {anecdotes.map(anecdote => 
                <Anecdote 
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => addNewVote(anecdote)}
                />)}
        </div>
    )
}

export default Anecdotes