source .env

yes | rover subgraph publish $APOLLO_GRAPH_REF \
  --schema ./subgraph-locations/locations.graphql \
  --name locations \
  --routing-url http://localhost:7778/graphql

yes | rover subgraph publish "$APOLLO_GRAPH_REF" \
  --schema ./subgraph-activities/activities.graphql \
  --name activities \
  --no-url

