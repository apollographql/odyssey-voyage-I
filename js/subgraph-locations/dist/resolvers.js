"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        locations: function (_, __, _a) {
            var dataSources = _a.dataSources;
            return dataSources.locationsAPI.getAllLocations();
        },
        location: function (_, _a, _b) {
            var id = _a.id;
            var dataSources = _b.dataSources;
            return dataSources.locationsAPI.getLocation(id);
        },
    },
    Location: {
        __resolveReference: function (_a, _b) {
            var id = _a.id;
            var dataSources = _b.dataSources;
            return dataSources.locationsAPI.getLocation(id);
        },
    },
};
exports.default = resolvers;
