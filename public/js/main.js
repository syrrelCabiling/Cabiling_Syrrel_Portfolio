// this is a partially revealing module pattern - just a variation on what we've already done

const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let movieButtons = document.querySelectorAll('.u-link'),
        lightbox = document.querySelector('.lightbox');

        function renderCastsList(casts) {
            return `<ul class="casts">
                       ${casts.map(item => `<li>${item}</li>`).join('')}
                   </ul>`
      }

        function movieInfo(movies) { // person is the databaase result
            let targetDiv = document.querySelector('.lb-content'),
                targetImg = lightbox.querySelector('img');

                let movieCont = `
                    <h2>${movies.Title}</h2>
                   <h5>Synopsis</h5> <p>${movies.Synopsis}</p>
                   <p>${movies.Specs}</p>
                   <h5>Casts</h5> <p>${movies.Casts}</p>
                   <h5>Rotten Tomato Rating</h5> <p>${movies.Rating}</p>
                    <p>${movies.Trailer}</p>
                `;

            console.log(movieCont);

            targetDiv.innerHTML = movieCont;
            targetImg.src = movies.imgsrc;

            lightbox.classList.add('show-lb');


        }

        function getMovieData(event) {
            event.preventDefault(); //kill default tag in behaviour (dont navigate anywhere)
           // debugger;
            let imgSrc = this.previousElementSibling.getAttribute('src');
            let url = `/users/${this.getAttribute('href')}`; // /1


            fetch(url) // go get data
                .then(res => res.json()) // parse the json into a plain object
                .then(data => {
                    console.log("my database result is:", data)

                    data[0].imgsrc = imgSrc;

                    movieInfo(data[0]);
                })
                .catch((err) => {
                    console.log(err)
                })}

        movieButtons.forEach(button => button.addEventListener('click', getMovieData));

        lightbox.querySelector('.close').addEventListener('click', function() {
            lightbox.classList.remove('show-lb');

        });

})();