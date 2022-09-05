import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
  }
  setSelected = (e) => {
    this.props.setSelected(e)
  }
  setAsinBook = (e) => {
    this.props.setAsinBook(e)
  };
  render() {
    return (
      <div className='b-book-list'>
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={this.state.searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((b) => (
                <Col xs={12} md={6} lg={3} key={b.asin}>
                  <SingleBook
                    selected={this.props.selected}
                    setSelected={this.setSelected}
                    asinBook={this.props.asinBook}
                    setAsinBook={this.setAsinBook}
                    book={b} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>

    )
  }
}

export default BookList
