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

  getReviewsForActivity(id) {
    return reviews.filter(r => r.activityId === id);
  }

  getOverallRatingForActivity(id) {
    const allRatings = reviews
      .filter(r => r.activityId === id)
      .map(r => r.rating);
    const sum = allRatings.reduce((a, b) => a + b, 0);
    const average = sum / allRatings.length || 0;
    return average;
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
    const { attractionType, comment, rating, id } = review
    const attractionKey = attractionType === 'location' ? 'locationId' : 'activityId'
    const newReview = {id: `rev-${reviews.length + 1}`, [attractionKey]: id, comment, rating };
    reviews = [...reviews, newReview];
    return newReview;
  }
}

module.exports = ReviewsAPI;
