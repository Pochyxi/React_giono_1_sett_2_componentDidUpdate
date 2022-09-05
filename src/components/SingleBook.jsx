import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends Component {

  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.props.setSelected(false)
            this.props.setSelected(true)
            this.props.setAsinBook(this.props.book.asin)
          }}
          style={{ border: this.props.selected && this.props.book.asin === this.props.asinBook ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
