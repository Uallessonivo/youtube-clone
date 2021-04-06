import {MongoClient} from 'mongodb';

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;

const cachedDb;
const cachedClient;

if (!uri) {
    throw new Error ("Please define the MONGO_URI enviroment variable inside .env.local");
}

if (!dbName) {
    throw new Error ("Please define the MONGO_DB_NAME enviroment variable inside .env.local")
}


export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {cliente: cachedClient, db: cachedDb}
    }

    const cliente = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = await cliente.db(dbName);
    cachedClient = client;
    cachedDb = db;
    return {cliente, db}
}

export default connectToDatabase;