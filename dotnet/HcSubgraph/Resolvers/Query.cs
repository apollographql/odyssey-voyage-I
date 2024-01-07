using EF.HcSubgraph.Repository;
using Location = EF.HcSubgraph.Models.Location;

namespace EF.HcSubgraph.Resolvers;

public class Query
{
    public async Task<IEnumerable<Location>> GetLocations([Service] LocationsRepository locationsRepository)
        => await locationsRepository.GetLocations();

    public async Task<Location?> GetLocation([Service] LocationsRepository locationsRepository, [ID] string id)
        => await locationsRepository.GetLocation(id);
}