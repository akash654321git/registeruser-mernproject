import mongoose from "mongoose"

// const conectDB = ()=>{

    
// mongoose.connect("mongodb+srv://RaviKumarSharma:i6tpVmiNCvIQSjH6@cluster0.pnzdn4a.mongodb.net/schoolDB", {
//     useNewUrlParser: true
// })
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )

// }

// export default conectDB


// const conectDB = (DATABASE_URL)=>{

    
//     mongoose.connect(DATABASE_URL)
//     .then( () => console.log("MongoDb is connected"))
//     .catch ( err => console.log(err) )
    
//     }
    
//     export default conectDB


// const conectDB = ()=>{
//     return  mongoose.connect("mongodb+srv://RaviKumarSharma:i6tpVmiNCvIQSjH6@cluster0.pnzdn4a.mongodb.net/schoolDB",).then(()=>{
//     console.log("database conected")
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

// export default conectDB




const conectDB = async (DATABASE_URL,)=>{

    try {
      await mongoose.connect(DATABASE_URL,{
        useNewUrlParser: true
    })
      console.log("databas conected")
   
    } catch (error) {
        console.log(error)
    }
   
    
    }
    
    export default conectDB








