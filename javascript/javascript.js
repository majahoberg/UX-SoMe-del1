"use strict";



fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen")

.then (function(data) {
	return data.json();
})


.then(function(post) {
    const tid = document.getElementById("tid");
    tid.innerHTML = (post.day_of_week);

		if(post.day_of_week === 1) {
			document.getElementById("tid").innerHTML('beforeend', "<p>Monday</p>");

		} else if (post.day_of_week === 2) {
			document.getElementById("tid").InnerHT('beforeend', "<p>Monday</p>");

		} else if (post.day_of_week === 3) {
			document.getElementById("tid").insertAdjecentHTML('beforeend', "<p>Monday</p>");

		} else if (post.day_of_week === 4) {
			document.getElementById("tid").insertAdjecentHTML('beforeend', "<p>Monday</p>");

		}	else if (post.day_of_week === 5) {
			document.getElementById("tid").insertAdjecentHTML('beforeend', "<p>Monday</p>");

		}	else if (post.day_of_week === 6) {
			document.getElementById("tid").insertAdjecentHTML('beforeend', "<p>Monday</p>");

		}	else if (post.day_of_week === 7) {
			document.getElementById("tid").insertAdjecentHTML('beforeend', "<p>Monday</p>");
				}
    });
