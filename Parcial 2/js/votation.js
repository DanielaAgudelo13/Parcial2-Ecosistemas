const booksContainer = document.querySelector('.booksContainer');

booksRef.on('value', function (snapshot) {
   renderBooks(snapshot);
});

const renderBooks = (snapshot) => {
   booksContainer.innerHTML = '';

   snapshot.forEach((data) => {
      let bookInfo = data.val();

      let book = new Book(bookInfo);

      booksContainer.appendChild(book.render());
   });
};

const btnLogout = document.querySelector('.btnLogout');

btnLogout.addEventListener('click', () => {
   console.log('salio');
   auth.signOut().then(() => {
      window.location.href = 'index.html';
   });
});

auth.onAuthStateChanged((user) => {
   console.log(user);
   if (user == null) {
      alert('Registrate');
      window.location.href = './index.html';
   }
});
