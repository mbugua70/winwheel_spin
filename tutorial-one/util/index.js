// let theWheel = new Winwheel({
//     // 'canvasId'    : 'myCanvas',
//     'numSegments' : 7,
//     'fillStyle'   : '#e7706f',
//     'lineWidth'   : 3
// });


// let theWheel = new Winwheel({
//     'numSegments' : 5,
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'},
//         {'fillStyle' : '#d8754f', 'text': 'Segment 5'}
//     ]
// });

// This tutorial demonstrates altering segment properties after the wheel has been created.

// Note that the segments array starts from 1 not 0. I deliberately did this to avoid any confusion when talking about the first segment, second segment etc. By starting at 1 the array index matches the segment number (One=1, Two=2, and so on).


// Remember to call the draw() function after making any changes to wheel in order for these changes to be rendered.


// You also alter the global wheel properties by using the dot operator, i.e. theWheel.fillStyle = '#DB0058'; at any time after the wheel object has been created.



// let theWheel = new Winwheel({
//     'numSegments' : 4,
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ]
// });

// function changeColours()
// {
//     // Change colours as desired by accessing the segment via the segments array
//     // of the wheel object (note first array position is 1 not 0).
//     let temp = theWheel.segments[1].fillStyle;
//     theWheel.segments[1].fillStyle = theWheel.segments[2].fillStyle;
//     theWheel.segments[2].fillStyle = theWheel.segments[3].fillStyle;
//     theWheel.segments[3].fillStyle = theWheel.segments[4].fillStyle;
//     theWheel.segments[4].fillStyle = temp;

//     // The draw method of the wheel object must be called
//     // in order for the changes to be rendered.
//     theWheel.draw();
// }

// adding and removing segments


// let theWheel = new Winwheel({
//     'numSegments' : 4,
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ]
// });

// function addSegment()
// {
//     // Use a date object to set the text of each added segment to the current minutes:seconds
//     // (just to give each new segment a different label).
//     let date = new Date();

//     // The Second parameter in the call to addSegment specifies the position,
//     // in this case 1 meaning the new segment goes at the start of the wheel.
//     theWheel.addSegment({
//         'text' : date.getMinutes() + ':' + date.getSeconds(),
//         'fillStyle' : 'aqua'
//     }, 1);

//     // The draw method of the wheel object must be called in order for the changes
//     // to be rendered.
//     theWheel.draw();
// }

// function deleteSegment()
// {
//     // Call function to remove a segment from the wheel, by default the last one will be
//     // removed; you can pass in the number of the segment to delete if desired.
//     theWheel.deleteSegment();

//     // The draw method of the wheel object must be called to render the changes.
//     theWheel.draw();
// }

// The addSegment() function returns a pointer to the new segment so if desired you can set the properties of it any time after it has been created, so long as this reference as been kept in a variable. For example...



// let newSegment = theWheel.addSegment(); // Add segment

// newSegment.text = "Hello World";        // Set text and fillStyle using returned
// newSegment.fillStyle = "green";         // pointer to the segment object.

// theWheel.draw()

// adding text alignment and orientation



// When trying to position text within the segments there are four things to understand:

// textAlignment
// textMargin
// textOrientation
// textDirection

// Alignment

// Alignment is what the text is aligned to, the default, which you have seen in the previous tutorials, is center, but there is also inner and outer.


// let theWheel = new Winwheel({
//     'numSegments' : 4,
//     // 'textAlignment': "inner",
//     // 'textAlignment': "outer",
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ]
// });


// textMargin
// Margin is used in conjunction with the alignment property to add a margin to the left or right side of the text.
// You will probably want some margin when using the inner or outer textAlignment options. In fact some margin is included by default based on the global font size. This might look right, or you may need to adjust it.

// let theWheel = new Winwheel({
//     'numSegments' : 4,
//     // 'textAlignment': "inner",
//     'textAlignment': "outer",
//     "textMargin": 15,
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ]
// });


// Orientation
// Orientation is used to control if the text is drawn horizontally, vertically, or if it is to follow the curve of the wheel using the curved option.
// Horizontally (the default) means that text is drawn from left to right making the text in segments on the right half of the wheel the most readable. Vertically means that text will be drawn top downwards making the text in segments on the top half of the wheel the more readable (with the default text direction).

// let theWheel = new Winwheel({
//     'numSegments' : 4,
//     // 'textAlignment': "inner",
//     'textAlignment': "outer",
//     // "textMargin": 15,
//     "textOrientation":"vertical",
//     'textFontFamily'  : 'Courier',
//     "textFontSize": 15,
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ]
// });


// Curved
// The curved option draws the text following the curve (arc) of the wheel. The text looks best when a monospace font is used as there can appear to be extra gaps after thin letters like 'i' and 'l' when using a non-monospace font.
// The textAlignment works as expected with curved orientation in that you can have curving text aligned to the inner, outer, or center of the wheel and a margin can be applied. The curved orientation really comes in handy when creating hollow wheels (doughnuts) as it may be the only orientation where the text will fit inside the segments.

// let theWheel = new Winwheel({
//     'numSegments' : 4,
//     // 'textAlignment': "inner",
//     // 'textAlignment': "outer",
//     // "textMargin": 15,
//     // "textOrientation":"vertical",
//     // 'textFontFamily'  : 'Courier',
//     // "textFontSize": 15,


//     //    curved property
//     // 'textOrientation' : 'curved',
//     // 'textAligment' : 'inner',
//     // 'textOrientation' : 'curved',
//     // 'textAligment' : 'outer',

//     // 'textOrientation' : 'curved',
//     // 'textAligment' : 'center',
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ]
// });


// Direction

// Direction is used in conjunction with the orientation to get the text in segments on a particular side of the wheel the "right" way up. There are two options for textDirection, normal (default) and reversed.
// Situations where you might want to reverse the textDirection is if you wanted the text on the left half of the wheel to be the right way up and readable from left to right instead of text in segments on the right half, or want to make it so that vertically aligned text in the bottom half of a wheel is readable top down.

// let theWheel = new Winwheel({
//     'numSegments' : 5,
//     // direction property
//     // 'textOrientation' : 'horizontal',
//     // 'textDirection' : 'reversed',

//     'textOrientation' : 'vertical',
//     'textDirection' : 'reversed',
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'},
//         {'fillStyle' : '#d8754f', 'text': 'Segment 5'}
//     ]
// });

// In this tutorial I will explain the options when it comes to segment fill colours, segment lines, and text colour, lines and fonts.


// The properties involved are:

// fillStyle (for segments) and textFillStyle (for text)
// strokeStyle and textStrokeStyle
// lineWidth and textLineWidth
// textFontFamily
// textFontSize
// textFontWeight

// let theWheel = new Winwheel({
//     'numSegments' : 4,
//     // 'textAlignment': "inner",
//     // 'textAlignment': "outer",
//     'lineWidth': 3,
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ]
// });

// Wheel Radius and Center Point

// outerRadius

// The outer radius controls the size of the wheel, the larger the radius the bigger the wheel. The default option, which we have been using in all previous tutorials, is automatically calculated by the code to be half the smallest side of the canvas minus the lineWidth so the wheel is as big as it can be fitting nicely inside the canvas

// let theWheel = new Winwheel({
//     'numSegments' : 4,
//     // 'textAlignment': "inner",
//     // 'textAlignment': "outer",
//     'lineWidth': 3,
//     'outerRadius' : 140,
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ]
// });

// innerRadius

// The innerRadius can be used to create hollow wheels (doughnuts), where the segments don't go to the center point of the wheel. The default for this is 0.


// Like with outerRadius, the innerRadius is the number of pixels out from the center point of the wheel the inside edge is to be drawn. The larger the value the more hollow space will be inside the wheel.


// let theWheel = new Winwheel({
//     'numSegments' : 4,
//     // 'textAlignment': "inner",
//     // 'textAlignment': "outer",
//     'lineWidth': 3,
//     // 'outerRadius' : 140,
//     "innerRadius": 20,
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ]
// });

// creating Wheel with an image
// The properties involved for creating a wheel using an image are:

// drawMode
// wheelImage

// These can only be set globally for the whole wheel.



// Create new image object in memory.
// let loadedImg = new Image();

// Create callback to execute once the image has finished loading.
// loadedImg.onload = function()
// {
//     theWheel.wheelImage = loadedImg;    // Make wheelImage equal the loaded image object.
//     theWheel.draw();                    // Also call draw function to render the wheel.
// }

// Set the image source, once complete this will trigger the onLoad callback (above).
// loadedImg.src = "../spin image/compone-removebg-preview.png";
// loadedImg.src = "../spin image/cup-removebg-preview.png";
// loadedImg.src = "../image/hat-removebg-preview.png";
// loadedImg.src = "../spin image/keyboard-removebg-preview.png"

// Create the wheel
// let theWheel = new Winwheel({
//     'drawMode': 'image',  // drawMode must be set to image.
//     'numSegments'     : 4,
// });

// // Array to hold paths to your images
// let imagePaths = [
//     "../image/compone-removebg-preview.png",
//     "../image/cup-removebg-preview.png",
//     "../image/hat-removebg-preview.png",
//     "../image/keyboard-removebg-preview.png"
// ];

// // Loop through each image path
// for (let i = 0; i < imagePaths.length; i++) {
//     // Create new image object for each image
//     let loadedImg = new Image();

//     // Set the image source
//     loadedImg.src = imagePaths[i];

//     // Create callback to execute once the image has finished loading
//     loadedImg.onload = function() {
//         // Assign the loaded image to the respective segment
//         theWheel.segments[i].image = loadedImg;

//         // Redraw the wheel after each image has loaded
//         theWheel.draw();
//     };
// }


// image pointer
// let theWheel = new Winwheel({
//     'numSegments' : 4,
//     'outerRadius' : 110,
//     'textFontSize': 15,
//     'segments'    :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Prize One'},
//         {'fillStyle' : '#89f26e', 'text' : 'Prize Two'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Prize Three'},
//         {'fillStyle' : '#e7706f', 'text' : 'Prize Four'}
//     ]
// });


// let theWheel = new Winwheel({
//     'numSegments'    : 4,
//     'outerRadius'    : 140,
//     'segments'       :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Prize One'},
//         {'fillStyle' : '#89f26e', 'text' : 'Prize Two'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Prize Three'},
//         {'fillStyle' : '#e7706f', 'text' : 'Prize Four'}
//     ],
//     'animation' :                   // Note animation properties passed in constructor parameters.
//     {
//         'type'     : 'spinToStop',  // Type of animation.
//         'duration' : 5,             // How long the animation is to take in seconds.
//         'spins'    : 8              // The number of complete 360 degree rotations the wheel is to do.
//     }
// });


// Getting the segment (prize) pointed to

// In this tutorial I will show you how to get the segment / prize pointed to after the spinning has stopped, or at any time, by using the getIndicatedSegment() or getIndicatedSegmentNumber() methods.


// The getIndicatedSegment() function returns a reference to the segment object located under the pointer so you can get information from it such as the name or change any of its values. The getIndicatedSegmentNumber() just returns the position in the segments array of the wheel that is pointed to

// Using the Pointer Guide
// In order to help with development and debugging there is a helpful little feature of the wheel called the pointerGuide. It draws a line from the center of the wheel out past the edge at the angle the pointerAngle is set to so you can double-check that the pointerAngle property of the wheel matches where your prize pointer is located.


// To turn on the pointer guide, just set the display property of the pointerGuide to true after the wheel has been created then call the draw function of the wheel, for example: theWheel.pointerGuide.display = true; theWheel.draw();
// let theWheel = new Winwheel({
//     'numSegments'  : 4,
//     'pointerAngle' : 0,    // Ensure this is set correctly
//     'segments'     :        //    use pointerGuide to help.
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ],
//     'pointerGuide' :        // Turn pointer guide on.
//     {
//         'display'     : true,
//         'strokeStyle' : 'red',
//         'lineWidth'   : 3
//     }
// });


// let theWheel = new Winwheel({
//     'numSegments'  : 4,
//     'segments'     :
//     [
//         {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
//         {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
//         {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
//         {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
//     ],
//     'animation' :
//     {
//         'type'     : 'spinToStop',
//         'duration' : 5,
//         'spins'    : 8,

//         // Remember to do something after the animation has finished specify callback function.
//         'callbackFinished' : 'alertPrize()',

//     }
// });


//   // This function called after the spin animation has stopped.
//   function alertPrize()
//   {
//       // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
//       let winningSegment = theWheel.getIndicatedSegment();

//       // Basic alert of the segment text which is the prize name.
//       alert("You have won " + winningSegment.text + "!");
//   }


console.log(Winwheel)

let winsound = document.getElementById('winsound');
console.log(winsound);


let colourWheel = new Winwheel({
    'numSegments'    : 8,
    'outerRadius'    : 140,
    'pointerAngle'   : 0,              // Remember to specify if not default of 0 degrees.
    'segments'       :
    [
       {'fillStyle' : '#eae56f', 'text' : 'Prize 1'},
       {'fillStyle' : '#89f26e', 'text' : 'Prize 2'},
       {'fillStyle' : '#7de6ef', 'text' : 'Prize 3'},
       {'fillStyle' : '#e7706f', 'text' : 'Prize 4'},
       {'fillStyle' : '#eae56f', 'text' : 'Prize 5'},
       {'fillStyle' : '#89f26e', 'text' : 'Prize 6'},
       {'fillStyle' : '#7de6ef', 'text' : 'Prize 7'},
       {'fillStyle' : '#e7706f', 'text' : 'Prize 8'}
    ],
    'animation' :
    {
        'type'     : 'spinToStop',
        'duration' : 10,
        'spins'    : 8,

        // To do something after the animation has finished specify callback function.
        'callbackFinished' : 'winAnimation()',

        // During the animation need to call function to re-draw triangle.
        "callbackAfter": "playSound()",
    }
});


  // This function called after the spin animation has stopped.
  function winAnimation()
  {


      // Get the number of the winning segment.
      let winningSegmentNumber = colourWheel.getIndicatedSegmentNumber();

      // Loop and set fillStyle of all segments to gray.
      for (let x = 1; x < colourWheel.segments.length; x ++) {
          colourWheel.segments[x].fillStyle = 'gray';
      }

      // Make the winning one yellow.
      colourWheel.segments[winningSegmentNumber].fillStyle = 'yellow';

      // Call draw function to render changes.
      colourWheel.draw();
  }

  const playSound = () =>{
           // Get the audio with the sound it in, then play.
      let winsound = document.getElementById('winsound');
      console.log(winsound);
      winsound.play();
  }