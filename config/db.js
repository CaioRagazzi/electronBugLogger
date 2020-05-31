const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://caio:caiocaio@cluster0-y8nxy.gcp.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB Connected');

  } catch (error) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB