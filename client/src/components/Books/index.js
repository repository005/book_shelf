import React, { useEffect } from 'react'
import { getBookWithReviewer } from '../../actions'
import { connect } from 'react-redux'

const BookView = (props) => {

  useEffect(() => {
    props.dispatch(getBookWithReviewer(props.match.params.id));
  }, [])
  console.log(props);

  return (
    <div>
      BookView
    </div>
  )
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookView)