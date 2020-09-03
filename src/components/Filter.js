import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSearch } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    const filterField = useSelector(state => state.filter)
  
  const handleChange = (event) => {
    dispatch(updateSearch(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter anecdotes: <input value={filterField} onChange={handleChange} />
    </div>
  )
}

export default Filter