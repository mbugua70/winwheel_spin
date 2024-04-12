import { getURLParams } from "./getURLParams";

let winsound = document.getElementById("winsound");
const wheelBuutonEl = document.getElementById("wheelBuuton");

let winningSegment;
let colourWheel;
let get_number;

const findGiftNumber = async (text) => {
  try {
    const res = await fetch(`http://localhost:3000/api/gift_number/${text}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const gift = await res.json();
      get_number = gift.gift_number;
      get_number--;
    }

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
  } catch (err) {
    console.log(err);
  }
};

const arraySegments = async () => {
  const segments = await handleGetSegments();
  // console.log(segments.data);
  const items = segments.data
    .filter((item) => item.gift_number > 0)
    .map((item) => ({
      fillStyle: item.fillStyle,
      text: item.text,
    }));
  console.log(items);

  // winwheel configuration
  colourWheel = new Winwheel({
    numSegments: items.length,
    outerRadius: 270,
    innerRadius: 70,
    pointerAngle: 0, // Remember to specify if not default of 0 degrees.
    segments: items,
    animation: {
      type: "spinToStop",
      duration: 10,
      spins: 5,

      // To do something after the animation has finished specify callback function.
      // callbackFinished: "winAnimation()",

      callbackFinished: handleGiftNumber,

      // During the animation need to call function to re-draw triangle.
      callbackAfter: playSound,
    },
    // colourWheel.draw();
  });

  wheelBuutonEl.addEventListener(
    "click",
    () => {
      colourWheel.startAnimation();
    },
    false
  );
};

const playSound = () => {
  // Get the audio with the sound it in, then play.
  // let winsound = document.getElementById("winsound");
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

// player gift update

const handlePlayerUpdate = async (userID, text) => {
  const updatedValue = {
    player_marchandize: text,
  };

  try {
    const res = await fetch(
      `http://localhost:3000/api/playerupdate/${userID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedValue),
      }
    );

    if (res.ok || res.status === 204) {
      console.log("player marchandize  updated successfully");
    } else {
      console.error("Failed to update player marchandize");
    }
  } catch (err) {}
};

// userID
const userID = getURLParams();

// update gift_number
const handleGiftNumber = async () => {
  winningSegment = colourWheel.getIndicatedSegment();
  let text = winningSegment.text;
  await findGiftNumber(text);
  handlePlayerUpdate(userID, text);
  const updatedValue = {
    gift_number: get_number,
  };

  try {
    const res = await fetch(`http://localhost:3000/api/segment/${text}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedValue),
    });

    if (res.ok || res.status === 204) {
      console.log("Gift number updated successfully");
    } else {
      console.error("Failed to update gift number");
    }
  } catch (err) {}
};

arraySegments();
