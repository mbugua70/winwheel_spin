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
    const res = await fetch("scripts/REG.php", {
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
      } else {
        appNotifier(dataID.error.player_email);
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
    lineWidth: 1,
    pointerAngle: 0,
    responsive: true,
    segments: items,

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

  wheelBuutonEl.addEventListener(
    "click",
    async () => {
      if (allInputsFiiled()) {
        const player_marchandize = "";
        const formData_one = new FormData(form);
        formData_one.append("player_marchandize", player_marchandize);

        // const player_email = formData_one.get("player_email");
        const player_name = formData_one.get("player_name");
        const player_phone = formData_one.get("player_phone");

        if (!player_name && !player_phone) {
          appNotifier("Please enter all the fields!");
        } else {
          const playerData = {
            player_name: formData_one.get("player_name"),
            player_phone: formData_one.get("player_phone"),
          };

          const playerID = await handleSubmit(playerData);
          if (playerID) {
            userIDOne = playerID.id;
            colourWheel.startAnimation();
          }
        }
      } else {
        appNotifier("Please enter all the fields!");
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
    const res = await fetch("scripts/MERCH.php", {
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
    userID: userID,
  };

  try {
    const res = await fetch(`scripts/UPDATE.php/${text}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedValue),
    });

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
  //await findGiftNumber(text);
  handlePlayerUpdate(userIDOne, text);
  const updatedValue = {
    gift_number: get_number,
  };
};

const prizeAlert = () => {
  winningSegment = colourWheel.getIndicatedSegment();
  let text = winningSegment.text;
  console.log(text);
  if (text == "Try Again") {
    workingNotifier(`Sorry ${text} next time!`);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } else {
    workingNotifier(`You have won ${text}!`);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
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

const containerWidth = canvasContainer.offsetWidth;
const containerHeight = canvasContainer.offsetHeight;

if (containerWidth < 1080 && containerHeight < 1920) {
  const containerWidth = canvasContainer.offsetWidth - 20;
  const containerHeight = canvasContainer.offsetHeight - 100;
  const radius = containerWidth / 2 - 10;

  // Adjust for desired distance from the edge
  const leftOffset = 60;
  const topOffset = 25;
} else {
  const containerWidth = canvasContainer.offsetWidth - 120;
  const containerHeight = canvasContainer.offsetHeight - 200;
  const radius = containerWidth / 2 - 2;

  // Adjust for desired distance from the edge
  const leftOffset = 65;
  const topOffset = 25;
}

arraySegments();
