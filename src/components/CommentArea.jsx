import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
  state = {
    comments: [], // comments will go here
    isLoading: true,
    isError: false,
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps.asinBook !== this.props.asinBook) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
        this.props.asinBook,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NjIwMjMxMjcsImV4cCI6MTY2MzIzMjcyN30.I6b0OH9Z19fA56gR_JN7igfZg1dCjRkXr39-NUxd1iE',
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        this.setState({ comments: comments, isLoading: false, isError: false })
      } else {
        console.log('error')
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    return (
      <div className='b-comment'>
        {this.state.isLoading &&
          this.state.comments.length > 0 && <Loading />}
        {this.state.isError && <Error />}
        {this.state.comments.length > 0 && <AddComment asin={this.props.asinBook} />}

        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }
}

export default CommentArea
