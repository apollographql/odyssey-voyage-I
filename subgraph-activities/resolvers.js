const resolvers = {
  Query: {
    activities: (_, __, { dataSources }) => {
      return dataSources.activitiesAPI.getAllActivities()
    },
    activity: (_, { id }, { dataSources }) => {
      return dataSources.activitiesAPI.getActivity(id)
    }
  },
  Location: {
    __resolveReference: (location) => {
      return location
    },
    activities: ({id}, _, {dataSources}) => {
      return dataSources.activitiesAPI.getActivitiesForLocation(id)
    }
  },
  Activity: {
    __resolveReference: ({id}, { dataSources }) => {
      return dataSources.activitiesAPI.getActivity(id)
    },
    location: ({ locationId }) => ({id: locationId})
  }
}

module.exports = resolvers;