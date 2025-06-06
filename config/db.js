import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongoDb connected!")
    }catch(e){

        console.error('MongoDB connection error:', error.message);
  
        process.exit(1)
    }
}

export default connect