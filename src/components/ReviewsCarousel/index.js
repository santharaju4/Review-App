// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    console.log(reviewsList.length)
    const {activeReviewIndex} = this.state

    const resultUpdate = reviewsList[activeReviewIndex]
    console.log(resultUpdate)

    const {imgUrl, username, companyName, description} = resultUpdate

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            className="arrow-button"
            type="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>

          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            className="arrow-button"
            type="button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
