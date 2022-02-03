import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';


const app = express();
dotenv.config();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());
 
app.use('/posts',postRoutes);

app.get('/', (req, res) => {
    res.send('hello to memories API');
});
const PORT  = process.env.PORT || 5000;

const CONNECTION_URL = 'mongodb+srv://Bongz:tjdBDRpUQXW9P5x@cluster0.hj2nw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost: ${PORT}`)))
    .catch((error) => console.log(`{error} did not connect`));
