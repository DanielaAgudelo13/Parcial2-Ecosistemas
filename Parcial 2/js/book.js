class Book {
   constructor(bookInfo) {
      this.book = bookInfo;
   }

   executeRating = (stars) => {
      const starsLength = stars.length;
      let i;

      stars.forEach((star, starIndex) => {
         star.onclick = () => {
            stars.forEach((s) => {
               s.src = './img/star_outline.svg';
            });

            for (let i = starIndex; i >= 0; --i) {
               stars[i].classList.add('ratingStarActive');
               stars[i].src = './img/star.svg';
            }
         };
      });
   };

   render = () => {
      const votesKeys = this.book.votes ? Object.keys(this.book.votes) : [];
      const votesData = this.book.votes ? Object.values(this.book.votes) : [];

      let rating = 0;

      votesData.forEach((element) => {
         rating += element;
      });

      rating /= votesData.length;

      let userHasVote = votesKeys.includes(currentEmail.split('@')[0]);

      let bookContainer = document.createElement('section');
      bookContainer.className = 'book';
      bookContainer.innerHTML = `
         <div>
            <h1>${this.book.name}</h1>

            <div class="bookStars">
               <img class="ratingStar " src="./img/star_outline.svg"/>
               <img class="ratingStar " src="./img/star_outline.svg"/>
               <img class="ratingStar " src="./img/star_outline.svg"/>
               <img class="ratingStar " src="./img/star_outline.svg"/>
               <img class="ratingStar " src="./img/star_outline.svg"/>
            </div>
         </div>

         <p class="bookRating">${rating.toFixed(1)}</p>
      `;

      const ratingStars = bookContainer.querySelectorAll('.ratingStar');

      if (userHasVote) {
         let userVote = votesData[votesKeys.indexOf(currentEmail.split('@')[0])];
         console.log(userVote);

         for (let i = userVote - 1; i >= 0; --i) {
            ratingStars[i].classList.add('ratingStarActive');
            ratingStars[i].src = './img/star.svg';
         }
      }

      const executeRating = (stars) => {
         stars.forEach((star, starIndex) => {
            star.onclick = () => {
               if (!userHasVote) {
                  for (let i = starIndex; i >= 0; --i) {
                     stars[i].classList.add('ratingStarActive');
                     stars[i].src = './img/star.svg';
                  }

                  db.ref('books/' + this.book.id + '/votes/' + currentEmail.split('@')[0]).set(starIndex + 1);
               }
            };
         });
      };

      executeRating(ratingStars);

      return bookContainer;
   };
}
