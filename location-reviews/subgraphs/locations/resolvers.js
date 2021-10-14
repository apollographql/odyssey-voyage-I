const resolvers = {
	Location: {
		__resolveReference(parent, args) {
			return { ...parent }
		}
	}
}
module.exports = resolvers;