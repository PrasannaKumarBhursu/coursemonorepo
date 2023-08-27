import mongoose from 'mongoose';

const connection = {
    isConnected: false
};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    let db = await mongoose.connect('mongodb+srv://prasannakumarbhursu:1prasanna324@course-selling.wbpwzsr.mongodb.net/Courses', { dbName: "Courses" });

    connection.isConnected = true;
}

export default dbConnect;
