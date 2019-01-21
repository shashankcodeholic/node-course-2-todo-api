const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');
	
	// db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
	
	// db.collection('Todos').find({
	// 	_id: new ObjectID('5c45a48b7c9ad36ff6fb270a')
	// }).toArray().then((docs) =>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch the Todos', err);
	// });

	// db.collection('Todos').find().count().then((count) =>{
	// 	console.log(`Todos count is: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to count the Todos', err);
	// });

	db.collection('Users').find({name: 'Shashank'}).toArray().then((docs) =>{
		// console.log(`Todos count is: ${count}`);
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch the Users', err);
	});
	client.close();
});