const {locations} = require('./locations_data.json');

class LocationsAPI {
  getAllLocations() {
    return locations;
  }

  getLocation(id) {
    return locations.find(l => l.id === id);
  }
}

module.exports = LocationsAPI;
