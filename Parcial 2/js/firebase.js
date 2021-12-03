const firebaseConfig = {
   apiKey: 'AIzaSyAXiR54jiJNH0nk3sMff6LLTlJZS0DZo78',
   authDomain: 'test-1afe4.firebaseapp.com',
   databaseURL: 'https://test-1afe4-default-rtdb.firebaseio.com',
   projectId: 'test-1afe4',
   storageBucket: 'test-1afe4.appspot.com',
   messagingSenderId: '448317167531',
   appId: '1:448317167531:web:1bf64e4c2194327c3d64ee',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

const booksRef = db.ref('books');
let currentEmail;

auth.onAuthStateChanged((user) => {
   if (user) {
      currentEmail = user.email;
      console.log(currentEmail);
   }
});
