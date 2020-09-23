import axios from 'axios'

export function getBooks(
  limit = 10,
  start = 0,
  order = 'asc',
  list = ''
){
  const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
    .then(res => {
        if (list) {
          return [...list, ...res.data]
        } else {
          return res.data
        }
      });
  return {
    type: 'GET_BOOKS',
    payload: request
  }
}

export function getBookWithReviewer(id){
  const request = axios.get(`/api/getBook/?id=${id}`)

  return (dispatch) => {
    request.then(({data}) => {
      let book = data;
      
      axios.get(`/api/getReviewer?id=${data.ownerId}`)
      .then(({data}) => {
        let response = {
          book,
          reviewer: data
        }
      
        dispatch({
          type: 'GET_BOOK_WITH_REVIEWER',
          payload: response
        })
      })
    })
  }
}

export function clearBookWithReviewer() {
  return {
    type: ' ',
    payload: {
      book: {},
      reviewer: {}
    }
  }
}