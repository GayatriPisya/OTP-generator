let generateOTP = () => {
  const otpLength = 6;
  const otp = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("otpDisplay").innerText = `${otp}`;
};

document.getElementById("generateBtn").addEventListener("click", () => {
  generateOTP();
  resetCopyButton();
});

window.addEventListener("load", () => {
  generateOTP();
  resetCopyButton();
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const otpDisplay = document.getElementById("otpDisplay");
  const otpText = otpDisplay.innerText;

  // Create a textarea element to copy the text to clipboard
  const textarea = document.createElement("textarea");
  textarea.value = otpText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Change button text to "Copied"
  document.getElementById("copyBtn").innerText = "Copied!";
});

function resetCopyButton() {
  // Reset button text to "Copy OTP" after a short delay
  setTimeout(() => {
    document.getElementById("copyBtn").innerText = "Copy";
  }, 2000); // Change back after 2 seconds (2000 milliseconds)
}
