# Wojo Hotchocolate PoC

PoC to check the integration of a .NET graph into an Apollo supergraph

### Generate Schema

dotnet run -- schema export --output hclocations.graphql

### Start Router with Tracing

APOLLO_KEY=[APOLLO_KEY] APOLLO_GRAPH_REF=FlyBy-tutorial-sfzom@current ./router --config router.yaml --log trace

## Publish Schemas

### .NET Version

APOLLO_KEY=[APOLLO_KEY] rover subgraph publish FlyBy-tutorial-sfzom@current --name locations --schema ./dotnet/HcSubgraph/hclocations.graphql
APOLLO_KEY=[APOLLO_KEY] rover subgraph publish FlyBy-tutorial-sfzom@current --name reviews --schema ./js/subgraph-reviews/reviews.graphql

### Node.js Version

APOLLO_KEY=[APOLLO_KEY] rover subgraph publish FlyBy-tutorial-sfzom@current --name locations --schema ./js/subgraph-locations/locations.graphql
APOLLO_KEY=[APOLLO_KEY] rover subgraph publish FlyBy-tutorial-sfzom@current --name reviews --schema ./js/subgraph-reviews/reviews.graphql
