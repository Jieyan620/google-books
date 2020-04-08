import React from 'react'

const BookSearch = () => {
  return (

    <div class="input-group mb-3">
      <input 
      type="text" 
      class="form-control" 
      placeholder="Book Name" 
      aria-label="Recipient's username" 
      aria-describedby="button-addon2" />
        <div class="input-group-append">
          <button 
          class="btn btn-outline-secondary" 
          type="button" 
          id="button-addon2"
          >Search</button>
        </div>
    </div>
  
  )
}

export default BookSearch