let winsound = document.getElementById("winsound");
const wheelBuutonEl = document.getElementById("wheelBuuton");

console.log(winsound);

let colourWheel;
let get_number;

const findGiftNumber = async (text) => {
  try{
    const res = await fetch(`http://localhost:3000/api/gift_number/${text}`, {
      method: 'GET',
      headers: {
        "Content-Type":"application/json"
      }
    })
  }
}

const arraySegments = async () => {
  const segments = await handleGetSegments();
  // console.log(segments.data);
  const items = segments.data.map((item) => ({
    fillStyle: item.fillStyle,
    text: item.text,
  }));

  // winwheel configuration
  colourWheel = new Winwheel({
    numSegments: segments.data.length,
    outerRadius: 170,
    pointerAngle: 0, // Remember to specify if not default of 0 degrees.
    segments: items,
    animation: {
      type: "spinToStop",
      duration: 10,
      spins: 8,

      // To do something after the animation has finished specify callback function.
      // callbackFinished: "winAnimation()",

      callbackFinished: handleGiftNumber,

      // During the animation need to call function to re-draw triangle.
      callbackAfter: "playSound()",
    },
  });

  wheelBuutonEl.addEventListener(
    "click",
    () => {
      colourWheel.startAnimation();
    },
    false
  );
};

// // This function called after the spin animation has stopped.
// function winAnimation() {
//   // Get the number of the winning segment.
//   let winningSegmentNumber = colourWheel.getIndicatedSegmentNumber();

//   // Loop and set fillStyle of all segments to gray.
//   for (let x = 1; x < colourWheel.segments.length; x++) {
//     colourWheel.segments[x].fillStyle = "gray";
//   }

//   // Make the winning one yellow.
//   colourWheel.segments[winningSegmentNumber].fillStyle = "yellow";

//   // Call draw function to render changes.
//   colourWheel.draw();
// }

const playSound = () => {
  // Get the audio with the sound it in, then play.
  let winsound = document.getElementById("winsound");
  console.log(winsound);
  winsound.play();
};

const handleGetSegments = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/segments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const segments = await res.json();
      console.log(segments);
      return segments;
    }
  } catch (error) {
    return null;
  }
};

// update gift_number
const handleGiftNumber = () => {
  let winningSegment = colourWheel.getIndicatedSegment();
  let text = winningSegment.text;

  get_number--;

  const updatedValue = {
    gift_number: get_number,
  };

  try {
    fetch(`http://localhost:3000/api/segment/${text}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedValue),
    })
      .then((res) => {
        if (res.ok || res.status === 204) {
          console.log("Gift number updated successfully");
        } else {
          console.error("Failed to update gift number");
        }
      })
      .catch((error) => {
        console.error("Error updating gift number:", error);
      });
  } catch (err) {}
};

arraySegments();