// using ApolloGraphQL.HotChocolate.Federation;
using EF.HcSubgraph.Repository;

namespace EF.HcSubgraph.Models;

public record Location([property: ID][property: Key] string Id, string Name, string Description, string Photo)
{
    [ReferenceResolver]
    public static async Task<Location?> GetLocationById([Service] LocationsRepository locationsRepository, string id)
        => await locationsRepository.GetLocation(id);
}