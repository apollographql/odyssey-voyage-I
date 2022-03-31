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
    location: ({ locationId }) => ({id: locationId}),
    stats: ({ id }, _, { dataSources}) => {
      return dataSources.activitiesAPI.getActivity(id)
    }
  },
  ActivityStats: {
    exosuitRequired: ({averageTemperature, gravity}) => {
      const hasExtremeTemp = averageTemperature < 0 || averageTemperature > 50;
      const hasExtremeGravity = gravity < 4 || gravity > 9;
      // an exosuit is only required if the activity has extreme temperatures or extreme gravity
      return hasExtremeTemp || hasExtremeGravity;
    },
  }
}

module.exports = resolvers;