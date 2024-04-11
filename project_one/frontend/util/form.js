const form = document.getElementById("form");
const iconsError = document.getElementById("icons-error");

window.addEventListener("load", () => {
  const handleNetworkChange = () => {
    if (navigator.onLine) {
      iconsError.style.display = "none";
    } else {
      iconsError.style.display = "block";
    }
  };

  window.addEventListener("online", handleNetworkChange);
  window.addEventListener("offline", handleNetworkChange);
});

form.addEventListener(
  "submit",
  async function (e) {
    e.preventDefault();
    const player_marchandize = "";
    const formData_one = new FormData(form);
    formData_one.append("player_marchandize", player_marchandize);
    console.log(formData_one.get("player_email"));

    const player_email = formData_one.get("player_email");
    const player_phone = formData_one.get("player_phone");

    if (!player_email || !player_phone) {
      appNotifier("Please fill all the required fields");
    } else {
      const playerData = {
        player_email: formData_one.get("player_email"),
        player_phone: formData_one.get("player_phone"),
        player_marchandize: formData_one.get("player_marchandize"),
      };

      const dataID = await handleSubmit(playerData);
      console.log(dataID);
    }

    // inputs.forEach((input) => {
    //   input.value = "";
    // });
  },
  false
);

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

    if (res.ok) {
      workingNotifier("Your details are successfully submitted!");
      return dataID;
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch with status ${res.status}`);
    }
  } catch (error) {
    console.log("Fetch error", error);
    appNotifier("Failed to submit the form. Please try again later.");
    return null;
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
