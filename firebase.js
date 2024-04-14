const { initializeApp } = require("firebase/app");
require('dotenv').config();
const { getFirestore , doc , setDoc , getDocs , collection , query} = require("firebase/firestore");

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    databaseUrl : process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSENGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASURMENT_ID
};
 let app = initializeApp(firebaseConfig);
 let firestoreDB = getFirestore(app);

// Method to upload data
async function upload(){
    let data = {
        key1 : 'ksjdhk',
        key2 : 'kkdb'
    }
    try {
        const document = doc(firestoreDB , "users" , "test-id");
        let updatedData = await setDoc(document , data);
        console.log("data Svaed");
        return updatedData;
    } catch (error) {
        console.error(error)
    }
}

//Method to retrive data
async function getData() {
    try {
        const collectionRef = collection(firestoreDB, "users");
        const querySnapshot = await getDocs(collectionRef);
        const finalData = [];
        querySnapshot.forEach(doc => {
            finalData.push(doc.data());
        });
        console.log(finalData);
        return finalData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

module.exports = {
    app,
    firestoreDB
}