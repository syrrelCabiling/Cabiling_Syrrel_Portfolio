// this is a partially revealing module pattern - just a variation on what we've already done

const myPortfolio = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let eachPiece = document.querySelectorAll('.projLink'),
        lightbox = document.querySelector('.lightbox');

        function portRes(piece) { // person is the databaase result
            let targetDiv = document.querySelector('.lb-content'),
                targetImg = lightbox.querySelector('img');

                let work = `
                    <h2>${piece.Title}</h2>
                    <img src="${piece.DispImg}">
                   <p>${piece.Desc1}</p>
                   <p>${piece.Desc2}</p>
                `;

            console.log(work);

            targetDiv.innerHTML = work;
            targetImg.src = piece.imgsrc;

            lightbox.classList.add('show-lb');


        }

        function getEachPiece(event) {
            event.preventDefault(); //kill default tag in behaviour (dont navigate anywhere)
           // debugger;
            let imgSrc = this.previousElementSibling.getAttribute('src');
            let url = `/users/${this.getAttribute('href')}`; // /1


            fetch(url) // go get data
                .then(res => res.json()) // parse the json into a plain object
                .then(data => {
                    console.log("my database result is:", data)

                    data[0].imgsrc = imgSrc;

                    portRes(data[0]);
                })
                .catch((err) => {
                    console.log(err)
                })}

        eachPiece.forEach(button => button.addEventListener('click', getEachPiece));

        lightbox.querySelector('.close').addEventListener('click', function() {
            lightbox.classList.remove('show-lb');

        });

})();