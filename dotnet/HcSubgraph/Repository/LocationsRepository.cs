namespace EF.HcSubgraph.Repository;

using Microsoft.Extensions.Caching.Memory;
using Location = Models.Location;

public class LocationsRepository(IMemoryCache cache)
{
    private readonly IMemoryCache cache = cache;

    public async Task<IEnumerable<Location>> GetLocations() => await GetOrLoadLocations();

    public async Task<Location?> GetLocation(string id) => (await GetOrLoadLocations()).FirstOrDefault(x => x.Id == id);

    private async Task<IEnumerable<Location>> GetOrLoadLocations()
    {
        JsonSerializerOptions serializerOptions = new()
        {
            PropertyNameCaseInsensitive = true
        };

        async Task<IEnumerable<Location>> LoadLocations()
        {
            string locationsAsJson = await File.ReadAllTextAsync("Data/locations_data.json");
            return JsonSerializer.Deserialize<IEnumerable<Location>>(locationsAsJson, serializerOptions)
                ?? Enumerable.Empty<Location>();
        }

        return await cache.GetOrCreateAsync("locations", async entry =>
        {
            entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5);
            return await LoadLocations();
        }) ?? Enumerable.Empty<Location>();

    }
}