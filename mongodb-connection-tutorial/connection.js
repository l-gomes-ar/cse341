// Require dotenv for passwords
require('dotenv').config();

/* ****************************************
 * Connect to a MongoDB Database - Section 1
 * **************************************** */
/* ****************************************
 * The MongoDB module exports MongoClient, and that’s 
 * what we’ll use to connect to a MongoDB database.
 * We can use an instance of MongoClient to connect 
 * to a cluster, access the database in that cluster,
 * and close the connection to that cluster.
 * **************************************** */
const { MongoClient } = require('mongodb');

/* ****************************************
 * Let’s create an asynchronous function named main()
 * where we will connect to our MongoDB cluster, 
 * call functions that query our database, and
 * disconnect from our cluster.
 * **************************************** */
async function main() {
    // Create constant for connection URI
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.e3frzzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    // Create an instance of MongoClient
    const client = new MongoClient(uri);

    // Wrap functions that interact with the database to handle errors
    try {
        // Connect to cluster
        await client.connect();
    
        // Build function that prints the names of the databases in cluster
        await listDatabases(client);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close(); // Ensure the connection will be ended
    }
}

// Call main, send errors to console
main().catch(console.error);

/* ****************************************
 * Connect to a MongoDB Database - Section 2
 * **************************************** */

// List databases in our cluster
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log('Databases:');
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}