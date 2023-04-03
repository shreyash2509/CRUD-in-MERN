import mongoose from "mongoose"

const Connection=async (db_uri)=>{
  try{
    await mongoose.connect(db_uri,{ useUnifiedTopology:true,useNewUrlParser:true});
    console.log("db connected succesfully");
  }catch(error){
    console.log("error while connecting to database ",error); 
  }
}

export default Connection;