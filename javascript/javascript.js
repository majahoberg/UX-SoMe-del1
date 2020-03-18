"use strict";



fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen")

.then (function(data) {
	return data.json();
})


.then(function(post) {
    const tid = document.getElementById("tid");
    tid.innerHTML = ("Klokken er: "+ post.datetime);

    });
