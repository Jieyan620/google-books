import React, { useState, useEffect } from 'react'
import Book from './utils/Book'
import axios from 'axios'


const App = () => {

  const [bookState, setBookState] = useState({
    books: [],
    searchText: ''

  })

  const handleInputChange = ({ target }) => {
    setBookState({ ...bookState, [target.name]: target.value })
  }

  // const handleCreateBook = event => {
  //   console.log(event)
  //   event.preventDefault()
  //   Item.create({
  //     text: itemState.text,
  //     isDone: false
  //   })
  //     .then(({ data: item }) => {
  //       let items = JSON.parse(JSON.stringify(itemState.items))
  //       items.push(item)
  //       setItemState({ ...itemState, items, text: '' })
  //     })
  // }

  // const handleToggleComplete = (id, isDone) => {
  //   Item.update(id, { isDone: !isDone })
  //     .then(() => {
  //       let items = JSON.parse(JSON.stringify(itemState.items))
  //       items.forEach(item => {
  //         if (item._id === id) {
  //           item.isDone = !isDone
  //         }
  //       })
  //       setItemState({ ...itemState, items })
  //     })
  // }

  // const handleDeleteItem = id => {
  //   Item.delete(id)
  //     .then(() => {
  //       let items = JSON.parse(JSON.stringify(itemState.items))
  //       items = items.filter(item => item._id !== id)
  //       setItemState({ ...itemState, items })
  //     })
  // }

  useEffect(() => {
    Book.read()
      .then(({ data: books }) => {
        setBookState({ ...bookState, books })
      })
  }, [])

  return (
    <div>

      
    </div>
  )
}

export default App
