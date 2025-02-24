// dom api
let winsound = document.getElementById("winsound");
const wheelBuutonEl = document.getElementById("wheelBuuton");
const form = document.getElementById("form");
const iconsError = document.getElementById("icons-error");
const inputs = document.querySelectorAll(".input");
const canvasContainer = document.getElementById("canvasContainer");

var userIDOne;

let winningSegment;
let colourWheel;
let get_number;

const allInputsFiiled = () => {
  return Array.from(inputs).every((input) => input.value.trim() !== "");
};

// handleSubmit function

const handleSubmit = async (data) => {
  console.log(data);

  try {
    const res = await fetch("http://localhost:3000/api/player", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataID = await res.json();
    console.log(dataID);
    if (dataID.error) {
      if (dataID.error === "The player has already participated") {
        appNotifier("The player has already participated");
        console.log("hello");
      } else {
        // appNotifier(dataID.error.player_email);
      }
    }

    if (res.ok) {
      console.log("Formdata submitted successfully");
      return dataID;
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch with status ${res.status}`);
      return null;
    }
  } catch (error) {
    console.log("Fetch error", error.message);

    console.log("failed to submit");
    return null;
  }
};

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
      strokeStyle: item.strokeStyle,
      textFillStyle: item.textFillStyle,
    }));
  console.log(items);

  // winwheel configuration
  colourWheel = new Winwheel({
    numSegments: items.length,
    outerRadius: 240,
    innerRadius: 75,
    textAlignment: "center",
    textFontSize: 16,
    pointerAngle: 0,
    responsive: true,
    segments: items,
    pins: {
      number: 16, // Number of pins
      outerRadius: 12,
      responsive: true,
      margin: -30, // Adjust  margin
      fillStyle: "red",
      func: function (){

      }
    },
    animation: {
      type: "spinToStop",
      duration: 10,
      spins: 5,

      // To do something after the animation has finished specify callback function.
      // callbackFinished: "winAnimation()",

      callbackFinished: handleGiftNumber,

      // refresh page
      // callbackFinished: refreshPage,

      callbackAfter: playSound,
    },
    // colourWheel.draw();
  });

  let filterState = false;

    // Function to simulate flickering effect on pins
    function flickerPins() {
      console.log(colourWheel, "winwheel")
      setInterval(() => {
        filterState = !filterState;
        // let newOpacity = Math.random() * 0.45 + 0.45; // Random flicker effect
        // colourWheel.pins.fillStyle = `rgba(255, 215, 0, ${newOpacity})`; // Adjust color opacity
        colourWheel.pins.fillStyle = filterState ? "red" : "gold"; // Adjust color opacity
        colourWheel.draw(); // Redraw wheel with updated pin color
    }, 500);

  }

flickerPins();

  wheelBuutonEl.addEventListener(
    "click",
    async () => {
      if (allInputsFiiled()) {
        const player_marchandize = "";
        const formData_one = new FormData(form);
        formData_one.append("player_marchandize", player_marchandize);


        // const player_email = formData_one.get("player_name");
        // const player_phone = formData_one.get("player_ph");

        if (!player_name) {
          appNotifier("Please fill all the required fields");
        } else {
          const playerData = {
            // player_email: formData_one.get("player_email"),
            player_name: formData_one.get("player_name"),
            player_marchandize: formData_one.get("player_marchandize"),
          };

          const playerID = await handleSubmit(playerData);
          if (playerID) {
            userIDOne = playerID.id;
            colourWheel.startAnimation();
          }
        }
      } else {
        appNotifier("Please fill all the required fields");
      }
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

      return segments;
    }
  } catch (error) {
    appNotifier("Could not connect to the server!");
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
      prizeAlert();
    } else {
      console.error("Failed to update player marchandize");
    }
  } catch (err) {}
};

// update gift_number
const handleGiftNumber = async () => {
  winningSegment = colourWheel.getIndicatedSegment();
  let text = winningSegment.text;
  console.log(text);
  await findGiftNumber(text);
  handlePlayerUpdate(userIDOne, text);
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

const prizeAlert = () => {
  winningSegment = colourWheel.getIndicatedSegment();
  let text = winningSegment.text;
  workingNotifier(`You have won ${text}`);
  setTimeout(() => {
    window.location.reload();
  }, 3000);
};




// swal libraly
const workingNotifier = (message) => {
  swal({
    title: message,
    text: "",
    icon: "success",
  });
};

//   swal libraly
function appNotifier(message) {
  swal({
    title: message,
    text: "",
    icon: "warning",
  });
}


arraySegments();
