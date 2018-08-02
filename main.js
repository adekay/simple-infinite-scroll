(function () {
    'use strict';
    /*jslint browser: true*/
    /*eslint-env browser*/
    /*global $*/

    var countPage = 1

    function getArticles(page) {
        $.getJSON("https://api.hackerwebapp.com/news", {
            page: page
        }).then(function (data) {
            countPage++
            data.forEach(function (data) {
                var article = `<div class="article">
                               <a href=${data.url} class="title">${data.title}</a>
                               <a href="${data.domain}" class="domain">${data.domain}</a>
                               <p>posted <span class="time">${data.time_ago}</span> by <span class="user">${data.user}</span></p>
                           </div>
                    `
                $(article).appendTo(".page");
            });

        });
    }

    getArticles(countPage);

    window.onscroll = function (ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
           getArticles(countPage);
        }
    };

}());
