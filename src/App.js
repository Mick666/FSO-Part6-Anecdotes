import React, {useEffect} from 'react'
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anecdotes'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import {initializeAnecdotes} from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        anecdoteService
            .getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
    }, [dispatch])

    return (
        <div>
            <Notification />
            <Anecdotes />

            <NewAnecdote />
        </div>
    )
}

export default App