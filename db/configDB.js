export default{
    mongoDB:{
        url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.2smy7qn.mongodb.net/${process.env.MONGO_DBASE}?retryWrites=true&w=majority`,
        options:{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }
}