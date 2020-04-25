import React, { useState, useEffect } from 'react'
import BookSearch from './components/BookSearch'
import BookCard from './components/BookCard'
import Book from './utils/Book'
import axios from 'axios'


const App = () => {

  const [bookState, setBookState] = useState({
    books: [],
    searchText: '',
    title: '',
    authors: '',
    description: '',
    image: '',
    link: ''
  })

  const handleInputChange = ({ target }) => {
    setBookState({ ...bookState, [target.name]: target.value })
  }

  const handleSearchBook = (event) => {
    event.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookState.searchText}&key=AIzaSyDf5OkyrX7Z1npFLoWsNAd_1h-FbfqGPZU`)
      .then(({ data: bookInfos }) => {
        // console.log(bookInfos)
        let books= bookInfos.items
        console.log(books)
        setBookState({books})
      })
  }

  // useEffect(() => {
  //   Book.read()
  //     .then(({ data: books }) => {
  //       setBookState({ ...bookState, books })
  //     })
  // }, [])

  return (
    <div>
      <BookSearch
        bookState={bookState}
        handleSearchBook={handleSearchBook}
        handleInputChange={handleInputChange}
      />
      
       <BookCard
        bookState={bookState}
      />
    
      

    </div>
  )
}

export default App
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