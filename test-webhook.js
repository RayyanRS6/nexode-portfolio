const url = "https://script.google.com/macros/s/AKfycbzsnBeLgcsMO_s4fVgMr5bruIbf33m0STTRTz-G_oMSIZKeC_2W0BNeAxq9M1y4r9HH7g/exec";
const data = new URLSearchParams();
data.append("Name", "Test Name");
data.append("Email", "test@example.com");
data.append("Project Parameters", "Test message from the terminal");

fetch(url, {
  method: "POST",
  body: data,
})
  .then(res => res.text())
  .then(text => console.log("Response:", text))
  .catch(err => console.error("Error:", err));
