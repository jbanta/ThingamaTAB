
         tool.minDistance = 15;

         var path;
         // The amount of points in the path:
         var points = 30;

         // The distance between the points:
         var length = 30;

         function onMouseDown(event) {
             // Create a new path and select it:
             var col1 = Math.floor(Math.random() * 256);
             var col2 = Math.floor(Math.random() * 256);
             var col3 = Math.floor(Math.random() * 256);
             path = new Path({
             //strokeColor: new Color(col1, col2, col3),
             strokeColor: "rgb(" + col1 + ", " + col2 + ", " + col3 + ")",
             strokeWidth: 20,
             strokeCap: 'round'
             });
             


             // Add a segment to the path where
             // you clicked:
             path.add(event.point);
             path.fullySelected = false;
         }

         function onMouseDrag(event) {
             // Every drag event, add a segment
             // to the path at the position of the mouse:
             path.add(event.point);
         }
         function onMouseMove(event) {
             var len = path.segments.length;
             path.lastSegment.point = event.point;
             for (var i = len - 1; i > 0; i--) {
                 var segment = path.segments[i];
                 var previousSegment = segment.previous;
                 var vector = segment.point - previousSegment.point;
                 vector.length = length;
                 previousSegment.point = segment.point - vector;
             }
             path.smooth({ type: 'continuous' });
         }

         /* text */
         var text = new PointText(view.center);
         text.content = 'Draw!';
         text.style = {
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: 60,
            fillColor: 'red',
            justification: 'center',
            strokeWidth: 50
         };
         text.opacity = .4
