import  Express  from "express";
import conectDB from "./db/conectdb.js";
import router from "./routes/route.js";
import cors from "cors"

const app = Express()

const port = process.env.port || '5000'

const DATABASE_URL = process.env.DATABASE_URL ||"mongodb+srv://RaviKumarSharma:i6tpVmiNCvIQSjH6@cluster0.pnzdn4a.mongodb.net/schoolDB"

// app.set('view engine', 'ejs')

// Middleware to parse JSON data
app.use(Express.json());
app.use(
    cors({
      origin: 'http://localhost:3000', // Replace with your allowed origin
      optionsSuccessStatus: 200 // Optional: HTTP status for successful CORS preflight
    })
  );
  


conectDB(DATABASE_URL,{
    useNewUrlParser: true
});

app.use(router);

app.listen(port, ()=>{
    console.log(`server is start listening port ${port}`)
})