function submitValue() {
  const val = document.getElementById("numInput").value;
  const status = document.getElementById("status");
  const congrats = document.getElementById("congrats");
  const nextBtn = document.getElementById("nextBtn");

  if (val === "") {
    status.textContent = "Enter a number first.";
    congrats.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }

  const expected = 43; // If they find this its fine cos its basically the same as finding the bug
  const numeric = Number(val);

  if (Number.isNaN(numeric)) {
    status.textContent = "That is not a valid number.";
    congrats.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }

  if (numeric === expected) {
    status.textContent = "Correct!";
    congrats.style.display = "block";
    nextBtn.style.display = "inline-block";
    return;
  }

  status.textContent = "Nope. Try again.";
  congrats.style.display = "none";
  nextBtn.style.display = "none";
}

function goNext() {
  window.location.href = "../.netlify/functions/checkAnswer";
}
