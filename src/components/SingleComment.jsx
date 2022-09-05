import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + asin,
      {
        method: 'DELETE',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NjIwMjMxMjcsImV4cCI6MTY2MzIzMjcyN30.I6b0OH9Z19fA56gR_JN7igfZg1dCjRkXr39-NUxd1iE',
        },
      }
    )
    if (response.ok) {
      alert('comment deleted!')
    } else {
      alert('comment NOT deleted!')
    }
  } catch (error) {
    alert('comment NOT deleted!')
  }
}

const SingleComment = ({ comment }) => (
  <ListGroup.Item className='b-comment-list'>
    {comment.comment}
    <Button
      variant="danger"
      className="ml-2 b-button-delete"
      onClick={() => deleteComment(comment._id)}
    >
      X
    </Button>
  </ListGroup.Item>
)

export default SingleComment
