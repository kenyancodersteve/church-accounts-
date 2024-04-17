// server.js

const express = require('express');
const bodyParser = require('body-parser');
const admin = require('../config');
const app = express();


// // Middleware
app.use(bodyParser.json());

// Signup endpoint
const sign =  async (req, res) => {
  try {
    const { email, password,number, name, phone } = req.body;
   // Create user in Firebase Authentication
admin.auth().createUser({
  email,
  password,
})
.then((userRecord) => {
  // User created successfully, now store additional data in Firestore
  return admin.firestore().collection('users').doc(userRecord.uid).set({
    customId: number,    
    email: userRecord.email,
    phone:phone,
    name:name
    // Add other user data as needed
  });
})
.then(() => {
  console.log('User created and additional data stored successfully');
  res.redirect('user/vieww')
})
.catch((error) => {
  console.error('Error creating user:', error);
  res.send(error)
});
  }catch{
    console.error('Error creating user:', error);
    res.send(error)
  }}

// Login endpoint
const login =  async (req, res) => {
  try {
    console.log(req.body)
    const { email, password} = req.body;
        // Verify user credentials
    //     const userRecord = await admin.auth().getUserByEmail(email);
    // console.log(email,password)
    //     // Attempt to sign in the user
    // // const userCredential = await admin.auth().signInWithEmailAndPassword(email, password);
    if(email == 'stephenndungu96@gmail.com'){
     const tr = {
        tres:'tres'
      }
      res.send(tr)
      
    }else{
         const trr = {
        tres:'user'
      }
      res.send(trr)

    }

  } catch (error) {
    console.error('Error signing in:', error);
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      res.status(500).json({ error: 'An error occurred while signing in' });
    }
  } 
}

// Start the server
// Logout endpoint
const logout = async (req, res) => {
  try {

    // Sign out the currently authenticated user
    await admin.auth().signOut();
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error signing out:', error);
    res.status(500).json({ error: 'An error occurred while logging out' });
  }
}

module.exports={
    sign,
    login,
    logout
}
