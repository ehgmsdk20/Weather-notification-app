import React, { useEffect, useState } from 'react';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Platform } from 'react-native'
const unitId =
  Platform.OS === 'ios'
    ? 'ca-app-pub-5434797501405557/2267266613' //ios unitId
    : 'ca-app-pub-5434797501405557/4414384979'; 

export default function SignInButton() {
  const webClientId =
    Platform.OS === 'ios'
      ? '664505521442-k1qbgl90errb1qgv9r9fbpulp09nrq3j.apps.googleusercontent.com'
      : '664505521442-aro858doqp9fnbb8lv7bn0hhous7mpne.apps.googleusercontent.com'; 
  
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId,
    });
  }, []);

  return(
  <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
  />
  );
}