"use strict";



fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen")

.then (function(data) {
	return data.json();
})


.then(function(post) {
    const tid = document.getElementById("tid");
    tid.innerHTML = (post.day_of_week);

		if(post.day_of_week === 1){
			tid.innerHTML = ("Monday");
		} else if (post.day_of_week === 2) {
			tid.innerHTML = ("Thuesday");
		} else if (post.day_of_week === 3) {
			tid.innerHTML = ("Wednesday");
		} else if (post.day_of_week === 4) {
			tid.innerHTML = ("Thursday");
		}	else if (post.day_of_week === 5) {
				tid.innerHTML = ("Friday");
		}	else if (post.day_of_week === 6) {
					tid.innerHTML = ("Saturday");
		}	else if (post.day_of_week === 7) {
						tid.innerHTML = ("Sunday");

		}

    });
