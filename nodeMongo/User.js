const User = (function() {
	const collection = 'user'

	return {

		insert: function(data, callback) {
			const dbConfig = require('./dbConfig')
			const client = dbConfig.client

			client.connect(function(err) {
				if(err) callback(err)
				else {
					const db = client.db(dbConfig.dbName)

					db.collection(collection).insertOne(data, function(err, result) {
						client.close(err => err ? console.log(err) : console.log('db closed!'))
						if(err) callback(err)
						else callback(null, result)						
					})

				}	
			})

		}
	}
})()

module.exports = User