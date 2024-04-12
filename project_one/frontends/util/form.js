// dom api
const form = document.getElementById("form");
const iconsError = document.getElementById("icons-error");
const btnEl = document.getElementById("dynamic_btn");

let isSubmitting = false;

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

      await handleSubmit(playerData);
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
    isSubmitting = true;
    const res = await fetch("http://localhost:3000/api/player", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataID = await res.json();
    console.log(dataID);

    if (res.ok) {
      isSubmitting = true;
      workingNotifier("Your details are successfully submitted!");
      setTimeout(() => {
        window.location.href = `/spin.html?userID=${dataID.id}`;
      }, 3000);
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

btnEl.textContent = !isSubmitting ? "Button" : "Submitting";


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
