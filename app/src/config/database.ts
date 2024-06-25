// import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBI: string = process.env.MONGO_URI || ''
console.log(DBI);
// const configurationOptions = {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// }

const connectDB = async () => {
  try {
    await mongoose.createConnection(DBI).asPromise();
    console.log('MongoDB connected');
    console.log(DBI)
  } catch (err) {
    console.log(DBI, typeof(DBI))
    console.error(err);
    process.exit(1);
  }
};

// const clientDB = new MongoClient(DBI, configurationOptions)

// const connectDB = async () => {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await clientDB.connect();
//     // Send a ping to confirm a successful connection
//     await clientDB.db("budget").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch (err) {
//     // Ensures that the client will close when you finish/error
//     console.log("llega aqui")
//     console.log(err);
//   }
// }

export default connectDB;
