var permittedUrls = [
  "https://baraka.onrender.com/",
  "https://baraka.onrender.com/sign"
];

window.onload = function() {
  auth.onAuthStateChanged(user => {
    if (!user) {
      var currentUrl = window.location.href;
       alert('You have been logged in.');
      if (!permittedUrls.includes(currentUrl)) {
         alert('You are logged out.');
        window.location.href = "https://baraka.onrender.com/"; // Redirect to home if URL not permitted
      }
    }
  });
  console.log("Page loaded");
};



window.onload = function() {
  auth.onAuthStateChanged(user => {
    if (!user) {
      var currentUrl = window.location.href;
      
      if (!permittedUrls.has(currentUrl)) {
        window.location.href = "https://baraka.onrender.com/"; // Redirect to home if URL not permitted
      }
    }
  });
  console.log("Page loaded");
};





// Call this on page load
window.onload = function() {
    if (window.location.href === 'https://baraka.onrender.com/') {
        alert("Welcome to Baraka App");
    } else if (window.location.href === 'https://baraka.onrender.com/sign') {
        alert("If you don't have an account, create one. Otherwise, log in to enjoy our services.");
    } else {
        // Add listener for authentication state changes
        auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in, redirect to a logged-in page
                window.location.href = 'https://baraka.onrender.com/user';
            } else {
                // User is signed out, redirect to a logged-out page
                window.location.href = 'https://baraka.onrender.com';
            }
        });
    }
};



// Function to handle logout
function logout() {
    // Firebase logout functionality
    auth.signOut().then(() => {
        // Logout successful
        alert('You have been logged out.');
        // Redirect to the login page
        window.location.href = 'https://baraka.onrender.com/sign';
    }).catch((error) => {
        // An error occurred
        console.error('Logout error:', error);
    });
}

// Function to handle form submission (logout)
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission
    // Firebase logout functionality
    auth.signOut().then(() => {
        // Logout successful
        alert('You have been logged out.');
        // Redirect to the login page
        window.location.href = 'https://baraka.onrender.com';
    }).catch((error) => {
        // An error occurred
        console.error('Logout error:', error);
    });
}

// Add event listener to the logout button
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Firebase logout functionality
    auth.signOut().then(() => {
        // Logout successful
        alert('You have been logged out.');
        // Redirect to a logged-out page
        window.location.href = 'https://baraka.onrender.com';
    }).catch((error) => {
        // An error occurred
        console.error('Logout error:', error);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const toggleLink = document.getElementById("toggleForm");
    const toggleLink2 = document.getElementById("toggleForm2");
  
  
  
    toggleLink.addEventListener("click", function(event) {
      if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
      } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
      }
    });
    toggleLink2.addEventListener("click", function(event) {
      if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
      } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
      }
    });
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();     

      var form = document.getElementById("login");
      
      const formData = new FormData(form);
      const requestData = Object.fromEntries(formData.entries());
      console.log(formData,'req',requestData)
      const email =requestData.email 
      const password =requestData.password
      console.log(email,password)
    
// Attempt to log the user in
auth.signInWithEmailAndPassword(email, password)
  .then((cred) => {
    // Handle successful login
    console.log('LOGIN WAS A SUCCESS ', cred);
    alert('Login successful. Welcome to Baraka App.'); // Alert the user about login success  

  
    // Access user data after authentication
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;

    // Access user data from Firestore
    firebase.firestore().collection("users").doc(uid).get()
      .then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          
          // Access user data fields
          console.log(userData.customId);
          console.log(userData.email);
          console.log(userData.phone);
          console.log(userData.name);
          
          
          // Access other user data fields as needed
                    
            fetch('auth/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
              })
              .then(response => {
                if (response.ok) {
                  // Handle successful login
                  alert("Login in successful")
                  console.log('Login successful');
                } else {
                  // Handle login failure
                  console.error('Login failed');
                  alert('Login failed. Please try again later.'); // Alert the user about login failure
                }
              })
        } else {
                    // Document doesn't exist
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });
            } else {
              // User is signed out
              console.log("User is signed out");
            }
            })})
            .catch(err => {
              // Handle login failure
              console.error('LOGIN FAILED:', err);
              alert(err.message); // Alert the user about login failure
            });
            
            
                
   
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var form = document.getElementById("signup");

      const formData = new FormData(form);
      const requestData = Object.fromEntries(formData.entries());
      console.log(formData,'req',requestData)

      fetch('auth/sign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (response.ok) {
            // Handle successful signup
            response.json().then(data => {
                console.log('Signup successful', data.message);
                alert(JSON.stringify(data.message)); // Display the response data
            });
        } else {
            // Handle signup failure
            response.json().then(errorData => {
                console.error('Signup failed', errorData);
                alert(JSON.stringify(errorData)); // Display the error data
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
    });

  document.getElementById('logoutBtno').addEventListener('click', function() {
    // Firebase logout functionality
    auth.signOut().then(() => {
        // Sign-out successful.
        alert('You have been logged out.');
        // You might also want to redirect the user to a login page after logging them out.
        // window.location.href = 'login.html';
    }).catch((error) => {
        // An error happened.
        console.error('Logout error:', error);
    });
});
