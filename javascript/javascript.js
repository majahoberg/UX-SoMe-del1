"use strict";



fetch("https://worldtimeapi.org/api/timezone/Europe/Copenhagen")

.then (function(data) {
	return data.json();
})


.then(function(post) {
      const dag = document.getElementById("dag");
      dag.insertAdjecentHTML = (post.day_of_week);

			const tid = document.getElementById("tid");
	 		const datoOGtid = new Date(post.datetime);

		tid.insertAdjacentHTML("beforeend", datoOGtid.getHours() + ":" + datoOGtid.getMinutes());

		if(post.day_of_week == 1) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Monday</p>");

		} else if (post.day_of_week == 2) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Tuesday</p>");

		} else if (post.day_of_week == 3) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Wednesday</p>");

		} else if (post.day_of_week == 4) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Thursday</p>");

		}	else if (post.day_of_week == 5) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Friday</p>");

		}	else if (post.day_of_week == 6) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Saturday</p>");

		}	else if (post.day_of_week == 7) {
			document.getElementById("dag").insertAdjacentHTML('beforeend', "<p>Sunday</p>");
				}
    });
