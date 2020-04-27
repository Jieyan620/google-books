import React, { useState, useEffect } from 'react'
import BookSearch from './components/BookSearch'
import BookCard from './components/BookCard'
import ReadCard from './components/ReadCard'
import Book from './utils/Book'
import axios from 'axios'
import './App.css'

const App = () => {

  const [bookState, setBookState] = useState({
    readList: [],
    books: [],
    searchText: '',
  })

  const handleInputChange = ({ target }) => {
    setBookState({ ...bookState, [target.name]: target.value })
  }

  // 在拿到数据后直接精简成所需的数据结构
  const handleSearchBook = (event) => {
    event.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookState.searchText}&key=${process.env.EmailPassword}`)
      .then(({ data: bookInfos }) => {
        // console.log(bookInfos)
        let books = []
        let thumbnail = ''
        let searchBooks = bookInfos.items
        searchBooks.forEach(element => {

          if (element.volumeInfo.imageLinks === undefined) {
            thumbnail = 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101032/112815935-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6'
          }
          else {
            thumbnail = element.volumeInfo.imageLinks.thumbnail
          }
          let searchBook = {
            id: element.id,
            title: element.volumeInfo.title,
            authors: element.volumeInfo.authors,
            description: element.volumeInfo.description,
            image: thumbnail,
            publishedDate: element.volumeInfo.publishedDate,
            pageCount: element.volumeInfo.pageCount,
            publisher: element.volumeInfo.publisher
          }
          books.push(searchBook)
        })
        // console.log(books)
        setBookState({ ...bookState, books: books, searchText: '' })
      })
  }

  
  const handleCreateBook = (book) => {
    // console.log(book)
    Book.create({
      gId: book.id,
      title: book.title,
      authors: JSON.stringify(book.authors),
      description: book.description,
      image: book.image,
      publishedDate: book.publishedDate,
      pageCount: book.pageCount,
      publisher: book.publisher
    })
      .then(({ data: book }) => {
        let readList = JSON.parse(JSON.stringify(bookState.readList))
        let newBook = {
          _id: book._id,
          gId: book.id,
          title: book.title,
          authors: book.authors,
          description: book.description,
          image: book.image,
          publishedDate: book.publishedDate,
          pageCount: book.pageCount,
          publisher: book.publisher
        }
        readList.push(newBook)
        console.log(readList)
        setBookState({ ...bookState, readList })
      })
  }

  const handleDeleteBook = (id) => {
    console.log(id)
    Book.delete(id)
      .then(() => {
        let readList = JSON.parse(JSON.stringify(bookState.readList))
        readList = readList.filter(item => item._id !== id)
        setBookState({ ...bookState, readList })
      })
  }


  useEffect(() => {
    Book.read()
      .then(({ data: readList }) => {
        setBookState({ ...bookState, readList })
      })
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jmubotron">
            <h1 className="display-4">YourBook App</h1>
            <p className="lead">Search for your book Info and add them to your booklist, manage all of your books.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4>Search For A Book</h4>
          <BookSearch
            bookState={bookState}
            handleSearchBook={handleSearchBook}
            handleInputChange={handleInputChange}
          />
          {bookState.books ?
            (
              <BookCard
                bookState={bookState}
                handleCreateBook={handleCreateBook}
              />
            ) : null}
        </div>
        <div className="col-md-6">
          <h4>Your Booklist</h4>
          <ReadCard
            bookState={bookState}
            handleDeleteBook={handleDeleteBook}
          />
        </div>
      </div>
    </div>

  )
}

export default App

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