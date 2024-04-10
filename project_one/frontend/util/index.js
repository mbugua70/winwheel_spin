let winsound = document.getElementById("winsound");

console.log(winsound);

let colourWheel = new Winwheel({
  numSegments: 8,
  outerRadius: 140,
  pointerAngle: 0, // Remember to specify if not default of 0 degrees.
  segments: [
    { fillStyle: "#eae56f", text: "Prize 1" },
    { fillStyle: "#89f26e", text: "Prize 2" },
    { fillStyle: "#7de6ef", text: "Prize 3" },
    { fillStyle: "#e7706f", text: "Prize 4" },
    { fillStyle: "#eae56f", text: "Prize 5" },
    { fillStyle: "#89f26e", text: "Prize 6" },
    { fillStyle: "#7de6ef", text: "Prize 7" },
    { fillStyle: "#e7706f", text: "Prize 8" },
  ],
  animation: {
    type: "spinToStop",
    duration: 10,
    spins: 8,

    // To do something after the animation has finished specify callback function.
    callbackFinished: "winAnimation()",

    // During the animation need to call function to re-draw triangle.
    callbackAfter: "playSound()",
  },
});

// This function called after the spin animation has stopped.
function winAnimation() {
  // Get the number of the winning segment.
  let winningSegmentNumber = colourWheel.getIndicatedSegmentNumber();

  // Loop and set fillStyle of all segments to gray.
  for (let x = 1; x < colourWheel.segments.length; x++) {
    colourWheel.segments[x].fillStyle = "gray";
  }

  // Make the winning one yellow.
  colourWheel.segments[winningSegmentNumber].fillStyle = "yellow";

  // Call draw function to render changes.
  colourWheel.draw();
}

const playSound = () => {
  // Get the audio with the sound it in, then play.
  let winsound = document.getElementById("winsound");
  console.log(winsound);
  winsound.play();
};
