// Connection to MongoDb
const { MongoClient } = require("mongodb");

// Connect URI
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.e3frzzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Retrieve data from db
module.exports = async function retrieveData() {

    // Create instance of mongoClient
    const client = new MongoClient(uri);

    try {
        // Connect to cluster, database get collection
        await client.connect();
        const db = client.db("professional");

        // Retrieve data as an array
        const data = await db.collection("professional").find({}).toArray();
        
        // Ensure the connection will be closed
        await client.close();

        // Return data (as first item of array)
        return data[0];
    } catch (err) {
        return console.error(err);
    }
};