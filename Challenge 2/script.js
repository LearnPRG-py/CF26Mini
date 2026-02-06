async function submitValue() {
  const input = document.getElementById("Input");
  const status = document.getElementById("status");
  const congrats = document.getElementById("congrats");
  const nextBtn = document.getElementById("nextBtn");

  const val = input.value.trim();

  if (!val) {
    status.textContent = "Enter a value first.";
    congrats.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }

  try {
    const res = await fetch("/.netlify/functions/check-answer", {
      method: "POST",
      body: JSON.stringify({ value: val })
    });

    const data = await res.json();

    if (data.correct) {
      status.textContent = "Correct!";
      congrats.style.display = "block";
      nextBtn.style.display = "inline-block";
      window._nextURL = data.next;
      return;
    }

    status.textContent = "Nope. Try again.";
    congrats.style.display = "none";
    nextBtn.style.display = "none";

  } catch {
    status.textContent = "Network error.";
  }
}
