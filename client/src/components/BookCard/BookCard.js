import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const BookCard = (props) => {

  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  };
  return (
    <div>
      {props.bookState.books ?
        props.bookState.books.map(
          (book, i) => (
            <Card className={classes.root} key={i}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {book.volumeInfo.title[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={book.volumeInfo.title}
                subheader={book.volumeInfo.authors}
              />
              <CardMedia
                className={classes.media}
                image={book.volumeInfo.imageLinks.smallThumbnail}
                title="image"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Published Date: {book.volumeInfo.publishedDate}
                </Typography>
                {book.volumeInfo.publisher ? (<Typography variant="body2" color="textSecondary" component="p">Publisher: {book.volumeInfo.publisher}</Typography>) : null}
                <Typography variant="body2" color="textSecondary" component="p">
                  Page Count: {book.volumeInfo.pageCount}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <button>add to list</button>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  {book.volumeInfo.description ? (<Typography paragraph>{book.volumeInfo.description}</Typography>):"No Description"}
                  
                </CardContent>
              </Collapse>
            </Card>

          )
        ) : null}


    </div>
  )
}

export default BookCard