import mongoose from "mongoose";


const mongoDBConnect = async () => {

    try {
        await mongoose.connect(process.env.MONGO_STRING)
        console.log(`MongoDB connect successfully`.bgMagenta);
    } catch (error) {
        console.log(error.message.bgRed);
    }
}

export default mongoDBConnect;

