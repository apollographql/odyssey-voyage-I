"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsAPI = void 0;
var reviews_data_json_1 = __importDefault(require("./reviews_data.json"));
var reviews = __spreadArray([], reviews_data_json_1.default.reviews, true);
var ReviewsAPI = /** @class */ (function () {
    function ReviewsAPI() {
    }
    ReviewsAPI.prototype.getReview = function (id) {
        return reviews.find(function (r) { return r.id === id; });
    };
    ReviewsAPI.prototype.getReviewsForLocation = function (id) {
        return reviews.filter(function (r) { return r.locationId === id; });
    };
    ReviewsAPI.prototype.getLatestReviews = function () {
        return reviews.slice(Math.max(reviews.length - 3, 0));
    };
    ReviewsAPI.prototype.getOverallRatingForLocation = function (id) {
        var allRatings = reviews
            .filter(function (r) { return r.locationId === id; })
            .map(function (r) { return r.rating; });
        var sum = allRatings.reduce(function (a, b) { return a + b; }, 0);
        var average = sum / allRatings.length || 0;
        return average;
    };
    ReviewsAPI.prototype.submitReviewForLocation = function (review) {
        var newReview = __assign({ id: "rev-".concat(reviews.length + 1) }, review);
        reviews = __spreadArray(__spreadArray([], reviews, true), [newReview], false);
        return newReview;
    };
    return ReviewsAPI;
}());
exports.ReviewsAPI = ReviewsAPI;
