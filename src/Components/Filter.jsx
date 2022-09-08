import React from 'react'
import {Form , Button} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'
const Filter = (props) => {
  return (
    <div>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>props.handleFilter(e.target.value)}
            />
            <StarRatingComponent
					name="star"
					onStarClick={(value) => props.handleRating(value)}
					emptyStarColor={'#F4EBD0'}
					starColor={'#D6AD60'}
					starCount={5}
				/>
            <Button variant="outline-success">Search</Button>
          </Form>
    </div>
  )
}

export default Filter