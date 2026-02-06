async function check() {
  const answer = document.getElementById("numInput").value;

  const response = await fetch("/.netlify/functions/checkAnswer", {
    method: "POST",
    body: JSON.stringify({ answer }),
  });

  const result = await response.json();

  if (result.success) {
    window.location.href = result.url;
  } else {
    alert(result.message);
  }
}
