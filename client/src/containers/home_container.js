import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/index';
import { BookItem } from '../widgetsUS/book_item';

const HomeContainer = (props) => {
  console.log(props);

  useEffect(() => {
    props.dispatch(getBooks(1, 0 , 'desc'));
  }, []);

  const renderItems = (books) => (
    books.list ? 
    books.list.map((item, i) => (
      <BookItem {...item} key={item._id} />
    ))
    :
    null
  )

  const loadmore = () => {
    let count = props.books.list.length;
    props.dispatch(getBooks(1, count, 'desc', props.books.list));
  }

  return (
    <div>
      {renderItems(props.books)}
      <div 
        className="loadmore"
        onClick={() => {
          loadmore();
        }}
      >Load More</div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(HomeContainer)