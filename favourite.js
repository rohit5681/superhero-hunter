<!DOCTYPE html>
<html lang="en" id="root" color-scheme="light">

<head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="shortcut icon" href="./images/icon.png" type="image/x-icon">
     <title>Superhero Hunter</title>

     <!-- Google fonts -->
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;0,600;0,900;1,100;1,200;1,300;1,800&display=swap"
          rel="stylesheet">

     <!-- fontawesome -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />

     <!-- Custom Stylesheet -->
     <link rel="stylesheet" href="./css/styles.css">
     <link rel="stylesheet" href="./css/favorites.css">
</head>

<body>

     <!-- Navbar -->
     <nav class="flex-row navbar">
          <!-- Site Icon and Name -->
          <div class="flex-row navbar-brand">
               <img class="logo" src="./images/mask.gif" alt="">
               <a href="./index.html">
                    <span>Superhero Hunter</span>
               </a>
          </div>
          <!-- Theme Button and Favourites Button -->
          <div class="flex-row favAndTheme-btn">
               <button id="theme-btn" class="btn"><i class="fa-solid fa-moon"></i></button>
               <a class="flex-row link-to-different-page" href="./index.html">
                    <button class="btn fav-btn"> <i class="fa-solid fa-house"></i> &nbsp; Home</button>
               </a>
          </div>
     </nav>

     <div class="favourite-characters">
          <div class="flex-row cards-container" id="container">
               <!-- Structure of the data that is added using DOM manipulation -->
               <!-- <div class="flex-col card">
                    <img src="${character.squareImage}" alt="">
                    <span class="name">${character.name}</span>
                    <span class="id">Id : ${character.id}</span>
                    <span class="comics">Comics : ${character.comics}</span>
                    <span class="series">Series : ${character.series}</span>
                    <span class="stories">Stories : ${character.stories}</span>
                    <a class="character-info" href="./more-info.html">
                         <button class="btn"><i class="fa-solid fa-circle-info"></i> &nbsp; More Info</button>
                    </a>
                    <div style="display:none;">
                         <span>${character.id}</span>
                         <span>${character.name}</span>
                         <span>${character.comics}</span>
                         <span>${character.series}</span>
                         <span>${character.stories}</span>
                         <span>${character.description}</span>
                         <span>${character.landscapeImage}</span>
                         <span>${character.portraitImage}</span>
                         <span>${character.squareImage}</span>
                    </div>
                    <button class="btn remove-btn"><i class="fa-solid fa-heart-circle-minus"></i> &nbsp; Remove from Favourites</button>
               </div> -->
          </div>
     </div>

     <span data-visiblity="hide" class="remove-toast">Removed from Favourites</span>

     <!-- Background image -->
     <img class="bg-img" src="./images/background-light-img.png" alt="">

     <!-- <img id="delete-all-img" src="./images/giphy.gif" alt="" srcset=""> -->

     <script src="./js/favorites.js"></script>

</body>

</html>
