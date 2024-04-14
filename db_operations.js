const  { firestoreDB } =  require("./firebase");
const {  doc , setDoc } = require("firebase/firestore");

async function saveUser(username , email , password , uniqueID){
    let user = {
        username : username,
        email : email,
        password : password,
    }
    try {
        const document = doc(firestoreDB , "users" , uniqueID);
        let updatedData = await setDoc(document , user);
        console.log("data Svaed");
        return updatedData;
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    saveUser
}