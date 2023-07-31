import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCS8AGASrLfecMzFUA6-5jzfSytxGhkPM4",
    authDomain: "whatsapp-cl-fb.firebaseapp.com",
    projectId: "whatsapp-cl-fb",
    storageBucket: "whatsapp-cl-fb.appspot.com",
    messagingSenderId: "743231490986",
    appId: "1:743231490986:web:be01a7a45959c21229f9d3",
    measurementId: "G-Y8MYXRX8C2"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;


{/* <BrowserRouter>
    <Sidebar />
    <Routes>
    <Route path='/rooms/:roomId' element={<Chat />} />
    </Routes>
</BrowserRouter> */}