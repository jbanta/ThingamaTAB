
	// Grid of dots that move away from mouse

	var dots = [];

	for (i = 0; i < window.innerHeight / 50; i++) {
		dots[i] = [];
		for (j = 0; j < window.innerWidth / 50; j++) {
			dots[i][j] = new Path.Circle({
				center: [j * 50 + 25, i * 50],
				radius: 20,
				fillColor: '#473109'
			});
		}
	}

	function onMouseMove(event) {
			for (i = 0; i < window.innerHeight / 50; i++) {
				for (j = 0; j < window.innerWidth / 50; j++) {
					var vector = event.point - dots[i][j].position;
					if (event.point.getDistance(dots[i][j].position) < 400) {
						vector.length = 250 / (event.point.getDistance(dots[i][j].position)) ;
						dots[i][j].position = dots[i][j].position - vector;

					}
				}
			}

	}
