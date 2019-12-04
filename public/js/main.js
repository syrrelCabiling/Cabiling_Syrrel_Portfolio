// this is a partially revealing module pattern - just a variation on what we've already done

const myPortfolio = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let eachPiece = document.querySelectorAll('.projLink'),
        lightbox = document.querySelector('.lightbox');

        function portRes(piece) { // portRes is the databaase result 
            let targetDiv = document.querySelector('.lb-content'),
                targetImg = lightbox.querySelector('img');

                let work = `
                    <h2>${piece.Title}</h2>
                   <p>${piece.Desc1}</p>
                   <p>${piece.Desc2}</p>
                `;

            console.log(work);

            targetDiv.innerHTML = work;
            targetImg.src = piece.OtherImg;



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

                    data[0].imgsrc = imgSrc; // Let above

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


(() => {
console.log('mail is firing!!');

    const form = document.querySelector('form'), submit = form.querySelector('.submit-button');

    function handleMail(event) {
        event.preventDefault();

        // formdata will be the values of the fields the user fills out (the inputs)
        // maildata is an object we'll build and send through with those values

        let formdata = new FormData(form),
            maildata = {};

        // parse the form data (it's an iterable, so you have to do it this way)
        // and populate the maildata object with the input values (the formdata entries)
        for (let [key, value] of formdata.entries()) {
            maildata[key] = value;
        }

        let url = `/mail`;

        // use the POST superglobal which is more secure than GET, and hit the /mail route in index.js
        // inside the routes folder. this will take in the formdata we're sending, and use that to send our email
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },

            body: JSON.stringify(maildata)
        })
            .then(res => res.json())
            .then(data => {
                // remove this when testing is done and everything is working
                console.log(data);

                if (data.response.includes("OK")) {
                    // we successfully sent an email via gmail and nodemailer!
                    // flash success here, reset the form
                    form.reset();
                    alert("email was sent!"); // DO NOT use alerts. they are so hacky and gross.
                }
            }) // this will be a success or fail message from the server
            .catch((err) => console.log(err));

        console.log('tried sending mail');
    }

    form.addEventListener('submit', handleMail)
})();