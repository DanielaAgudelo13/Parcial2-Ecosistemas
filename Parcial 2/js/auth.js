auth.onAuthStateChanged((user) => {
   console.log(user);
   if (user != null) {
      window.location.href = './voteList.html';
   }
});

const form = document.querySelector('.login');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const email = form.email.value;
   const password = form.password.value;

   if (email !== '' && password !== '') {
      auth
         .signInWithEmailAndPassword(email, password)
         .then(() => {
            window.location.href = './voteList.html';
         })
         .cath((error) => {
            console.log(error);
         });
   } else {
      alert('Please write all data');
   }
});
