"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    overwrite: true,
    schema: "./locations.graphql",
    generates: {
        "generated/graphql.ts": {
            plugins: ["typescript", "typescript-resolvers", "typescript-document-nodes"]
        },
        "./graphql.schema.json": {
            plugins: ["introspection"]
        }
    }
};
exports.default = config;
