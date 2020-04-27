import React, { useState } from 'react'

const BookCard = (props) => {

  return (
    <div>
      {props.bookState.books ?
        props.bookState.books.map(
          (book, i) => (
            <div className="card" key={i}>
              <img src={book.image} className="card-img-top" alt="bookImg"></img>
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
              </div>
              <ul
                 className="list-group list-group-flush">
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
              
                <li className="list-group-item">
                  <button 
                     className="btn btn-primary" 
                     type="button" 
                     data-toggle="collapse" 
                     data-target={"#"+`collapseExample${i}`} aria-expanded="false" 
                     aria-controls={`collapseExample${i}`}>
                    Description
                  </button>
                  <button
                      className="btn btn-primary"
                      type="button" 
                      value={book.gId}
                      onClick={()=>{props.handleCreateBook(book)}} >
                    Add to List
                  </button>
                </li>
                <div 
                  className="collapse" 
                  id={`collapseExample${i}`}>
                  {book.description ? (
                    <div 
                     className="card card-body">
                     {book.description}
                    </div>) : "No Description"}
                </div>
              </ul>
            </div>
          )
        ) : null}


    </div>
  )
}

export default BookCard