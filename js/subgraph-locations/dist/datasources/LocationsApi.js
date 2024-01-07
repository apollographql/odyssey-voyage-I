"use strict";
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
exports.LocationsAPI = void 0;
var locations_data_json_1 = __importDefault(require("./locations_data.json"));
var locations = __spreadArray([], locations_data_json_1.default.locations, true);
var LocationsAPI = /** @class */ (function () {
    function LocationsAPI() {
    }
    LocationsAPI.prototype.getAllLocations = function () {
        return locations;
    };
    LocationsAPI.prototype.getLocation = function (id) {
        return locations.find(function (l) { return l.id === id; });
    };
    return LocationsAPI;
}());
exports.LocationsAPI = LocationsAPI;
