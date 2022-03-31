const { activities } = require('./activities_data.json');

class ActivitiesAPI {
  getAllActivities() {
    return activities
  }

  getActivity(id) {
    return activities.find(a => a.id == id)
  }

  getActivitiesForLocation(id) {
    return activities.filter(a => a.locationId == id)
  }
}

module.exports = ActivitiesAPI;