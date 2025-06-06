import mongoose from "mongoose"
const URLSchema = mongoose.Schema({
    originalURL : String,
    shortURL : {
        type : String,
        required : [true, "short url required"],
        unique : true
    },
    createdAt : {
        type:Date,
        default : Date.now
    },
    clicks : {
        type: Number,
        default : 0
    }
})

export default mongoose.model("URL", URLSchema )