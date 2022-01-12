let reviews = [
  {
    id: '1',
    locationId: '1',
    rating: 5,
    comment:
      'I would also like to say thank you to all your staff. I would gladly pay over 600 dollars for planet. Planet was worth a fortune to my company. After using planet my business skyrocketed!',
  },
  {
    id: '2',
    locationId: '1',
    rating: 5,
    comment: "It's really wonderful. We have no regrets! Keep up the excellent work.",
  },
  {
    id: '3',
    locationId: '1',
    rating: 5,
    comment:
      "This is simply unbelievable! It's the perfect solution for our business. Really good. I don't always clop, but when I do, it's because of planet",
  },
  {
    id: '4',
    locationId: '1',
    rating: 2,
    comment:
      "Planet is exactly what our business has been lacking. It's incredible. If you want real marketing that works and effective implementation - planet's got you covered.",
  },
  {
    id: '5',
    locationId: '2',
    rating: 4,
    comment: 'Thanks planet! I was amazed at the quality of planet. Planet did exactly what you said it does.',
  },
  {
    id: '6',
    locationId: '2',
    rating: 3,
    comment:
      'I would also like to say thank you to all your staff. I would gladly pay over 600 dollars for planet. Planet was worth a fortune to my company. After using planet my business skyrocketed!',
  },
  {
    id: '7',
    locationId: '2',
    rating: 2,
    comment: "It's really wonderful. We have no regrets! Keep up the excellent work.",
  },
  {
    id: '8',
    locationId: '2',
    rating: 5,
    comment:
      "This is simply unbelievable! It's the perfect solution for our business. Really good. I don't always clop, but when I do, it's because of planet",
  },
  {
    id: '9',
    locationId: '3',
    rating: 5,
    comment:
      "Planet is exactly what our business has been lacking. It's incredible. If you want real marketing that works and effective implementation - planet's got you covered.",
  },
  {
    id: '10',
    locationId: '4',
    rating: 5,
    comment: 'Thanks planet! I was amazed at the quality of planet. Planet did exactly what you said it does.',
  },
];

class ReviewsAPI {
  getReview(id) {
    return reviews.find((r) => r.id === id);
  }

  getReviewsForLocation(id) {
    return reviews.filter((r) => r.locationId === id);
  }

  getOverallRatingForLocation(id) {
    const allRatings = reviews.filter((r) => r.locationId === id).map((r) => r.rating);
    const sum = allRatings.reduce((a, b) => a + b, 0);
    const average = sum / allRatings.length || 0;
    return average;
  }

  submitReviewForLocation(review) {
    const newReview = { id: reviews.length + 1, ...review };
    reviews = [...reviews, newReview];
    return newReview;
  }
}

module.exports = ReviewsAPI;
