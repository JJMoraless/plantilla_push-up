import "dotenv/config";
import { MongoClient } from "mongodb";

const atlasUri = process.env.ATLAS_URI;
const dbName = process.env.ATLAS_DB_NAME;
// mingo client
const client = new MongoClient(atlasUri);
// mingo cliente db ()
export const connectToDatabase = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log(`🤌  successful connection = DB: ${db.databaseName}`);
    return db;
  } catch (error) {
    console.log(`🦀 error = ${error}`);
  }
};

const db = await connectToDatabase();
export default db;
