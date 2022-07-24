





import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfiguration = {
    apiKey: "AIzaSyDGXLj0z0z1LVQzF-tupUjdVmQ8BN-OUXw",
    authDomain: "medbay-arg.firebaseapp.com",
    projectId: "medbay-arg",
    storageBucket: "medbay-arg.appspot.com",
    messagingSenderId: "60062140006",
    appId: "1:60062140006:web:a035df59c1541fb6ff0fa7",
    measurementId: "G-2JQ0FSS61L"
}

const app = initializeApp(firebaseConfiguration); 

const authentication = getAuth(app); 


export { authentication }



