# Location-reviews (actual name TBD)

This is the final stage for the demo app for course 2 of the next Odyssey series! This project will introduce learners to core federation concepts. They will be building this app from scratch!

## How to start the app

To run the server:

1. Navigate to `server`.
1. Run `npm install && npm start`. This will install all packages in the main server and the subgraphs, then start the main server.
1. In a separate terminal, navigate to `server` again.
1. Run `npm run start:subgraphs`. This will start up the 2 subgraphs (locations & reviews).

Try out queries! Queries are available in the [Workbench](https://apollographql.github.io/apollo-workbench-vscode/) file, or can be found further below.

To run the client:

1. Navigate to `client`.
1. Run `npm install && npm start`. This will install all packages in the client and start the application in `localhost:3000`.

### Queries

1. Get all locations for the homepage.

   ```graphql
   query getAllLocations {
     locations {
       id
       name
       photo
       description
       overallRating
     }
   }
   ```

1. Get details for a specific location.

   ```graphql
   query getLocationDetails {
     location(id: "location-1") {
       id
       name
       description
       photo
       overallRating
       reviews {
         comment
         rating
       }
     }
   }
   ```

1. Submit a review for a location.
   ```graphql
   mutation submitReview {
     submitReview(review: { comment: "asdada", rating: 5, locationId: "1" }) {
       code
       success
       message
       review {
         id
         comment
         rating
       }
     }
   }
   ```

## Learner's Perspective

The `client` app will be provided for them. We'll focus on building out the server-side.

Concepts to cover in no particular order:

- Entities
- Subgraph A + Subgraph B = Supergraph
- Setting up the gateway server
- Using `rover` to compose the supergraph

## Questions

- How/should we use Workbench to plan our federated graph? (I used it right at the start)
