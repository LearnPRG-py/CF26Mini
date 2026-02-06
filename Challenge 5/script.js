const input = document.getElementById("codeInput");
input.placeholder = "Type here...";

const challenges = [
  `x = 2 * 4 - 3

if (x > 3) and not (x < 0):
    print("o" + "w")
else:
    print("no")`,

  `codes = {
    "langs": {
        "py": "or",
        "js": "no"
    }
}

key = "p" + "y"
print(codes["langs"].get(key, "error"))`,

  `def mystery():
    part = "world"
    return part[-2:]

print(mystery())`,

  `result = ""

for i, c in enumerate(["l", "x", "l"]):
    if i != 1:
        result += c

print(result)`,

  `word = "theory"

start = len(word) - 5
end = start + 2

print(word[start:end])`,
];

const texts = [
  "Welcome to the Realm of Secrets...",
  "Each set of code will have a missing keyword...",
  "Make sure to write the answers down...",
];

const intro = document.getElementById("intro");
const submit = document.getElementById("submit");

let introIndex = 0;
let currentChallenge = 0;

function playIntro() {
  intro.textContent = texts[introIndex];
  intro.classList.remove("animate");
  void intro.offsetHeight;
  intro.classList.add("animate");
}

intro.addEventListener("animationend", () => {
  introIndex++;
  if (introIndex < texts.length) {
    playIntro();
  } else {
    showChallenge(0);
  }
});

playIntro();

function showChallenge(n) {
  intro.className = "challenge";
  intro.textContent = challenges[n] + "\n\n# enter the output above";
  input.hidden = false;
  if (!input.classList.contains("ready")) {
    input.classList.add("reveal", "ready");
    submit.classList.add("show");
  }
}

submit.addEventListener("click", async () => {
  const answer = input.value.trim();
  input.value = "";
  if (!answer) return;

  try {
    const res = await fetch("/.netlify/functions/checkAnswers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        challenge: currentChallenge,
        answer: answer,
      }),
    });

    const data = await res.json();

    const correct = data.success;

    if (correct) {
      setTimeout(() => {
        currentChallenge++;

        if (currentChallenge < challenges.length) {
          showChallenge(currentChallenge);
        } else {
          document.body.classList.add("access");
          intro.textContent = "ACCESS CODE";
          input.placeholder = "Enter access code...";
        }
        if (currentChallenge >= 6) {
          window.location.href = "https://hilarious-taiyaki-c278ae.netlify.app";
        }
      }, 700);
    } else {
      input.classList.add("shake");
      setTimeout(() => input.classList.remove("shake"), 400);
    }
  } catch (err) {
    console.error("Server error:", err);
  }
});
