
var permittedUrls = [
  "https://baraka.onrender.com/",
  "https://baraka.onrender.com/sign"
];

window.onload = function() {
  auth.onAuthStateChanged(user => {
    if (!user) {
      var currentUrl = window.location.href;
      if (!permittedUrls.includes(currentUrl)) {
        window.location.href = "https://baraka.onrender.com/"; // Redirect to home if URL not permitted
      }
    }
  });
  console.log("Page loaded");
};



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
     alert('Login successful. Welcome to Baraka App.'); // Alert the user about login failure
    if(email=='stephenndungu96@gmail.com'){
      window.location.href = "https://baraka.onrender.com/tres"; 
    }
window.location.href = "https://baraka.onrender.com/user"; // Redirect to home if URL not permitted   
    // Make another HTTP request after successful login
    fetch('auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => {
      if (response.ok) {
        // Handle successful login
        console.log('Login successful');
      } else {
        // Handle login failure
        console.error('Login failed');
        alert('Login failed. Please try again later.'); // Alert the user about login failure
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // alert('An unexpected error occurred. Please try again later.'); // Alert the user about unexpected error
    });
  })
  .catch(err => {
    // Handle login failure
    console.error('LOGIN FAILED:', err);
    alert(err.message); // Alert the user about login failure
  });
    })

  })
     
     
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

  
