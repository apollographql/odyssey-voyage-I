let {reviews} = require('./reviews_data.json');

class ReviewsAPI {
  getReview(id) {
    return reviews.find(r => r.id === id);
  }

  getReviewsForLocation(id) {
    return reviews.filter(r => r.locationId === id);
  }

  getLatestReviews() {
    return reviews.slice(Math.max(reviews.length - 3, 0));
  }

  getOverallRatingForLocation(id) {
    const allRatings = reviews
      .filter(r => r.locationId === id)
      .map(r => r.rating);
    const sum = allRatings.reduce((a, b) => a + b, 0);
    const average = sum / allRatings.length || 0;
    return average;
  }

  submitReviewForLocation(review) {
    const newReview = {id: `rev-${reviews.length + 1}`, ...review};
    reviews = [...reviews, newReview];
    return newReview;
  }
}

module.exports = ReviewsAPI;
