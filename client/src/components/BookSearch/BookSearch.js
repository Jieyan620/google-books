import React, { useState} from 'react'

const BookSearch = (props) => {
  return (

    <div className="input-group mb-3">
      <input 
      type="text" 
      className="form-control" 
      placeholder="Book Name" 
      aria-label="Recipient's username" 
      aria-describedby="button-addon2" 
      name="searchText"
      value={props.bookState.searchText}
      onChange={props.handleInputChange}/>
        <div className="input-group-append">
          <button 
          className="btn btn-outline-secondary" 
          type="button" 
          id="button-addon2"
          onClick={props.handleSearchBook}
          >Search</button>
        </div>
    </div>
  
  )
}

export default BookSearch