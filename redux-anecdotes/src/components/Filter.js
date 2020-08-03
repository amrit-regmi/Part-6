import React from 'react'
import { onFilterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  //const dispatch = useDispatch()
  const handleChange = (event) => {
    props.onFilterChange(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
const mapDispatchToProps = {
  onFilterChange
}

const ConnectedFilter = connect(null,mapDispatchToProps)(Filter)
export default ConnectedFilter//Filter