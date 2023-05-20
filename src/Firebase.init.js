  

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; 

// const firebaseConfig = {
//   apiKey: "AIzaSyBZotSXZv5AR78KbEgVafJKRO6tNjpviYw",
//   authDomain: "our-project-ef03d.firebaseapp.com",
//   projectId: "our-project-ef03d",
//   storageBucket: "our-project-ef03d.appspot.com",
//   messagingSenderId: "216930376275",
//   appId: "1:216930376275:web:fac4b44814b75ca67484a6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig); 
// const auth=getAuth(app);
// export default auth;




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";  
const firebaseConfig = {
  apiKey: "AIzaSyBPEsi4GlMBcIuQUVDwZPnlvTGYbiqZkrw",
  authDomain: "project-from-e17c2.firebaseapp.com",
  projectId: "project-from-e17c2",
  storageBucket: "project-from-e17c2.appspot.com",
  messagingSenderId: "478489104154",
  appId: "1:478489104154:web:7a769a5836ca9e8641a6a3",
  measurementId: "G-Z7MNHV74WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;