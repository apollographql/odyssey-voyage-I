import locationsData from './locations_data.json';

const locations = [...locationsData.locations];

export class LocationsAPI {
  getAllLocations() {
    return locations;
  }

  getLocation(id: string) {
    return locations.find((l) => l.id === id);
  }
}
