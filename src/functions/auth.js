import { auth } from './firebase-config.js';

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

async function signInUser() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}

function signOutUser() {
    signOut(getAuth());
}

// Initialize firebase auth
function initFirebaseAuth() {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver);
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    const profilePicUrl = getProfilePicUrl();
    const userName = getUserName();

    let status = document.getElementById('status');
    status.removeAttribute('hidden');


    // Set the user's profile pic and name.
    // userPicElement.style.backgroundImage =
    //   'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
    // userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    // userNameElement.removeAttribute('hidden');
    // userPicElement.removeAttribute('hidden');
    // signOutButtonElement.removeAttribute('hidden');

    // Hide sign-in button.
    // signInButtonElement.setAttribute('hidden', 'true');

    // We save the Firebase Messaging Device token and enable notifications.
    saveMessagingDeviceToken();
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    // userNameElement.setAttribute('hidden', 'true');
    // userPicElement.setAttribute('hidden', 'true');
    // signOutButtonElement.setAttribute('hidden', 'true');

    // Show sign-in button.
    // signInButtonElement.removeAttribute('hidden');
  }
}


// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || '../assets/images/profile_placeholder.png';
}
  
// Returns the signed-in user's display name.
function getUserName() {
  return getAuth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!getAuth().currentUser;
}

export { signInUser, signOutUser, initFirebaseAuth, getProfilePicUrl, getUserName, isUserSignedIn };