import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/index';

const HomeContainer = (props) => {
  console.log(props);

  useEffect(() => {
    props.dispatch(getBooks(3, 0 , 'desc'));
  }, []);

  const renderItems = () => (
    props.books.list ? 
    props.books.list.map((item, i) => (
      <div key={item._id}>{item.name}</div>
    ))
    :
    null
  )

  return (
    <div>
      {renderItems()}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(HomeContainer)