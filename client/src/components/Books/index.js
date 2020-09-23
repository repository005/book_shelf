import React, { useEffect } from 'react'
import { getBookWithReviewer, clearBookWithReviewer } from '../../actions'
import { connect } from 'react-redux'

const BookView = (props) => {

  useEffect(() => {
    props.dispatch(getBookWithReviewer(props.match.params.id));
    return () => {
      props.dispatch(clearBookWithReviewer());
    }
  }, [])
  

  const renderBook = () => (
    props.books.book ? 
    <div className="br_container">
      <div className="br_header">
        <h2>{props.books.book.name}</h2>
        <h5>{props.books.book.author}</h5>
        <div className="br_reviewer">
          <span>Review by: </span>{props.books.reviewer.name} {props.books.reviewer.lastname}
        </div>
      </div>
      <div className="br_review">{props.books.book.review}</div>
      <div className="br_box">
        <div className="left">
          <div>
            <span>Pages:</span> {props.books.book.pages}
          </div>
          <div>
            <span>Price:</span> {props.books.book.price}
          </div>
        </div>
        <div className="right">
          <span>Rating</span>
          <div>{props.books.book.rating}/5</div>
        </div>
      </div>
      </div>
    :
    null
  )

  return (
    <div>
      {renderBook()}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookView)