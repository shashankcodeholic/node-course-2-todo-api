// const MongoClient  = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'shashank', age: 26};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) =>{
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Shashank Sahu',
	// 	age: 27,
	// 	location: 'Codeholic JBP INDIA'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Users', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	client.close();
});