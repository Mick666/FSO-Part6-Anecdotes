import React from 'react'
import { connect } from 'react-redux'
import { updateSearch } from '../reducers/filterReducer'

const Filter = (props) => {
  
  const handleChange = (event) => {
    props.updateSearch(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter anecdotes: <input value={props.Filter} onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = {
  updateSearch
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter