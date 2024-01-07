using EF.HcSubgraph.Diagnostics;
using EF.HcSubgraph.Repository;
using EF.HcSubgraph.Resolvers;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddConsole();

builder.Services.AddLogging();
builder.Services.AddMemoryCache();
builder.Services.AddSingleton<LocationsRepository>();

// HotChocolate services
builder.Services
    .AddGraphQLServer()
    .AddDiagnosticEventListener<GraphQlEventListener>()
    // .AddApolloFederationV2()
    .AddApolloFederation()
    .AddApolloTracing()
    .AddQueryType<Query>();

var app = builder.Build();

//app.MapGet("/", () => "Hello World!");
app.MapGraphQL("/");

await app.RunWithGraphQLCommandsAsync(args);
