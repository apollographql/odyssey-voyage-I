"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        latestReviews: function (_, __, _a) {
            var dataSources = _a.dataSources;
            return dataSources.reviewsAPI.getLatestReviews();
        },
    },
    Mutation: {
        submitReview: function (_, _a, _b) {
            var locationReview = _a.locationReview;
            var dataSources = _b.dataSources;
            var newReview = dataSources.reviewsAPI.submitReviewForLocation(locationReview);
            return {
                code: 200,
                success: true,
                message: 'success',
                locationReview: newReview,
            };
        },
    },
    Location: {
        overallRating: function (_a, _, _b) {
            var id = _a.id;
            var dataSources = _b.dataSources;
            return dataSources.reviewsAPI.getOverallRatingForLocation(id);
        },
        reviewsForLocation: function (_a, _, _b) {
            var id = _a.id;
            var dataSources = _b.dataSources;
            return dataSources.reviewsAPI.getReviewsForLocation(id);
        },
    },
    Review: {
        location: function (review) {
            var locationId = review.locationId;
            return { id: locationId, reviewsForLocation: [] };
        },
    },
};
exports.default = resolvers;
