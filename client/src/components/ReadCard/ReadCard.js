import React from 'react'

const ReadCard = (props) => {

  return (
    <div>
      {props.bookState.readList ?
        props.bookState.readList.map(
          (book, i) => (
            <div className="card" key={i}>
              <ul
                className="list-group list-group-flush">
                <li className="list-group-item">
                  <h5 className="card-title">{book.title}</h5>
                </li>
                <li className="list-group-item">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target={"#" + `collapseExample${book._id}`} aria-expanded="false"
                    aria-controls={`collapseExample${book._id}`}>
                    Info
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    value={book._id}
                    onClick={() => { props.handleDeleteBook(book._id)}}
                   >
                    Delete
                  </button>
                </li>
                
                <div
                  className="collapse"
                  id={`collapseExample${book._id}`}>
                  <ul
                    className="list-group list-group-flush">
                    <img src={book.image} className="card-img-top" alt="bookImg"></img>
                    <li
                      className="list-group-item">
                      Authors: {book.authors}
                    </li>
                    <li
                      className="list-group-item">
                      Published Date: {book.publishedDate}
                    </li>
                    {book.publisher ? (
                      <li
                        className="list-group-item">
                        Publisher: {book.publisher}
                      </li>) : null}
                    <li
                      className="list-group-item">
                      Page Count: {book.pageCount}
                    </li>
                  </ul>
                  {book.description ? (
                    <div
                      className="list-group-item">
                      {book.description}
                    </div>) : <div
                      className="list-group-item">No Description</div>}
                </div>
              </ul>
            </div>
          )
        ) : null}


    </div>
  )
}

export default ReadCard