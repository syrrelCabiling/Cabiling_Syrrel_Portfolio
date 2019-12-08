<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Contact Form</title>
</head>
<body>

<section class="container mb-4">
        <h1 class="h1-responsive font-weight-bold my-4">Let's Connect!</h1>
        <p class="w-responsive mx-auto mb-5">I will get back to you within 24h.</p>

    <div class="row">
    <div class="col-md-9">
    <form action="data/contact.php" method="post"> <!-- method is how you want to send it -->

    <div class="col-md-6">
    <div class="md-form mb-0">
        <label for="name-field" class="mr-4">Name:</label> <!-- for label is for the ID / or matches the input's ID - click the name and the type should blink-->
        <input id="name-field" name="name" type="text" placeholder="Name">
    </div>
    </div>

    <div class="col-md-6">
    <div class="md-form mb-0">
        <label for="email-field" class="mr-4">Email:</label>
        <input id="email-field" name="email" type="email" placeholder="Email">
    </div>
    </div>

    <div class="col-md-6">
    <div class="md-form mb-0">
        <label for="subject-field" class="mr-3">Subject:</label>
        <input id="subject-field" name="subject" type="text" placeholder="Subject">
    </div>
    </div>

    <div class="col-md-6">
    <div class="md-form mb-0">
        <label for="text-field" class="mr-2">Message:</label>
        <textarea name="message" id="text-field"></textarea>
    </div>
    </div>    
    
        <button type="submit" class="btn btn-primary">SUBMIT</button>
    </form>
    </div>
    </div>
</section>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>