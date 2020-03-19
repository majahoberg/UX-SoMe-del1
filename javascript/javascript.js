"use strict";



fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen")

.then (function(data) {
	return data.json();
})


.then(function(post) {
    const tid = document.getElementById("tid");
    tid.insertAdjecentHTML = (post.day_of_week);

		if(post.day_of_week == 1) {
			document.getElementById("tid").insertAdjacentHTML('beforeend', "<p>Monday</p>");
			
		} else if (post.day_of_week == 2) {
			document.getElementById("tid").insertAdjacentHTML('beforeend', "<p>Tuesday</p>");

		} else if (post.day_of_week == 3) {
			document.getElementById("tid").insertAdjacentHTML('beforeend', "<p>Wednesday</p>");

		} else if (post.day_of_week == 4) {
			document.getElementById("tid").insertAdjacentHTML('beforeend', "<p>Thursday</p>");

		}	else if (post.day_of_week == 5) {
			document.getElementById("tid").insertAdjacentHTML('beforeend', "<p>Friday</p>");

		}	else if (post.day_of_week == 6) {
			document.getElementById("tid").insertAdjacentHTML('beforeend', "<p>Saturday</p>");

		}	else if (post.day_of_week == 7) {
			document.getElementById("tid").insertAdjacentHTML('beforeend', "<p>Sunday</p>");
				}
    });
