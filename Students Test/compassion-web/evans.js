import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYBeU9GaRUxBTO2RY26KA63RDD8TrMzeI",
  authDomain: "compassionke-e3f65.firebaseapp.com",
  projectId: "compassionke-e3f65",
  storageBucket: "compassionke-e3f65.appspot.com",
  messagingSenderId: "873616625595",
  appId: "1:873616625595:web:54f929b4813ea358493e9e",
  measurementId: "G-1DBN9KTHTJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Login input fields
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

// Create account fields
const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");
const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createacctbtn.addEventListener("click", function () {
  var isVarified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email inputs does not match");
    isVarified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignupPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password inputs does not match");
    isVarified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields");
  }

  if (isVarified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredentials) => {
        window.alert("Success! Account Created");
        window.location = "./createTask.html";
      })
      .catch((error) => {
        window.alert("Error occurred. Try Again");
      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      window.alert("Success!, Welcome Back");
      window.location = "./createTask.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      window.alert(errorMessage);
      // window.alert("Error occurred. Try Again");
    });
});

signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});