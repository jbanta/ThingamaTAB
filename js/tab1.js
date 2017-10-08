var circles = [];
var velocities = [];
var mousePosition;

  circles[1] = new Path.Circle({center: view.center,radius: 500, fillColor: 'rgb(204, 48, 48)'});
  circles[2] = new Path.Circle({center: view.center,radius: 450, fillColor: 'rgb(204, 68, 48)'});
  circles[3] = new Path.Circle({center: view.center,radius: 400, fillColor: 'rgb(204, 88, 48)'});
  circles[4] = new Path.Circle({center: view.center,radius: 350, fillColor: 'rgb(204, 108, 48)'});
  circles[5] = new Path.Circle({center: view.center,radius: 300, fillColor: 'rgb(204, 128, 48)'});
  circles[6] = new Path.Circle({center: view.center,radius: 250, fillColor: 'rgb(204, 148, 48)'});
  circles[7] = new Path.Circle({center: view.center,radius: 200, fillColor: 'rgb(204, 168, 48)'});

function onMouseMove(event) {
  mousePosition = event.point;
}

function onFrame(event) {
  circles[1].position = mousePosition;
  for (i = 2; i < 8; i++) {
    velocities[i] = circles[i-1].position - circles[i].position ;
    circles[i].position += velocities[i]/15;
  }
}
