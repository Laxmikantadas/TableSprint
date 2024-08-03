const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
        const con=await mongoose.connect(
            'mongodb+srv://daslaxmikanta219:lulu@das123.2qqfe6p.mongodb.net/userdb?retryWrites=true&w=majority&appName=das123')
            console.log("mongodb connected");
            
        } catch(err){
            console.log(err);
            process.exit(1)
            
        }
    
}
module.exports=connectDB
