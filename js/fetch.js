$(document).ready(function () {
    console.log("ready!");

    // Enable popover everywhere
    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    $(function () {
        $('.example-popover').popover({
            container: 'body'
        });
    });

    // 488f4000b0ef9d316845a2410186a6fb
    let tableau = [];
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=488f4000b0ef9d316845a2410186a6fb&sort_by=popularity.desc')
        .then(data => data.json())
        .then(data => {
            console.log(data);
            tableau = data.results;
            console.log(tableau);

            tableau.forEach(element => {
                
                let carousel = document.getElementById("carousel");
                let card = document.createElement("card");
                let cardImg = document.createElement("img");
                let cardBody = document.createElement("div");
                let cardTitle = document.createElement("h5");
                let cardText = document.createElement("p");

                card.className = "col-2 col-xs-12 ";

                cardBody.className = "card-body p-2";

                cardImg.className = "card-img-top";
                cardImg.setAttribute("width", "150");
                cardImg.setAttribute("height", "auto");
                cardImg.setAttribute("src", "https://image.tmdb.org/t/p/w500/" + element.poster_path);
                
                cardTitle.className = "card-title";
                cardTitle.innerHTML = element.title;

                cardText.className = "card-text text-muted";
                cardText.innerHTML = element.release_date;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                card.appendChild(cardImg);
                card.appendChild(cardBody)
                carousel.appendChild(card);

            });
            
        })

        // TODO
        /**
        * faire un breadcrumb dynamic qui lance un appel API avec un onclick() pour appeler diffréents critères de recherche
        * 
        * */

        // let array1 = ["1", "2", "3"]
        // array1.forEach(function (entry) {
        //     console.log(entry);
        // });

});