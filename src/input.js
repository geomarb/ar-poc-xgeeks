document.addEventListener("DOMContentLoaded", function () {
  const dropdownOptions = document.querySelectorAll(".dropdown-option");
  const selectedDeviceText = document
    .getElementById("selectedDeviceText")
    .querySelector("span");
  const fileInput = document.getElementById("fileInput");
  const arLink = document.getElementById("arLink");

  function updateSelectedDevice(device) {
    selectedDeviceText.textContent =
      device === "iphone" ? ` ".usdz"` : ` ".glb"`;
  }

  function toggleSelectedDevice() {
    dropdownOptions.forEach((option) => {
      option.classList.remove("selected");
    });
    this.classList.add("selected");

    const selectedDevice = this.getAttribute("data-device");

    document.getElementById("selectedDevice").value = selectedDevice;
    updateSelectedDevice(selectedDevice);
  }

  dropdownOptions.forEach((option) => {
    option.addEventListener("click", toggleSelectedDevice);
  });

  function openARLink() {
    const selectedDevice = document.getElementById("selectedDevice").value;
    const arModelUrl = fileInput.value.trim();

    if (arModelUrl !== "") {
      if (selectedDevice === "iphone") {
        window.location.href = encodeURIComponent(arModelUrl);
      } else if (selectedDevice === "android") {
        window.location.href =
          "intent://arvr.google.com/scene-viewer/1.0?file=" +
          encodeURIComponent(arModelUrl) +
          "#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;";
      }
    } else {
      alert("Please enter the AR model's URL.");
    }
  }

  arLink.addEventListener("click", openARLink);
});
