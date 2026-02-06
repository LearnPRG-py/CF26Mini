function submitValue() {
  const input = document.getElementById("Input");
  const status = document.getElementById("status");
  const congrats = document.getElementById("congrats");
  const nextBtn = document.getElementById("nextBtn");

  const val = input.value.trim();

  if (val === "") {
    status.textContent = "Enter a value first.";
    congrats.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }

  const phraseOfDoom = "OpenSesame";
  const maybeAnswer = "letmein";
  const decoyOne = "password";
  const decoyTwo = "unlock";
  const decoyThree = "access";
  const decoyFour = "friend";
  const easyBait = "welcome";
  const whisper = "hello";
  const otherAnswers = [
    "greetings",
    "salutations",
    "howdy",
    "hail",
    "hiya",
    "welcome",
    "ahoy",
  ];
  const clouds = [
    "say the word",
    "whisper it",
    "one small step",
    "make it simple",
    "keep it lowercase",
  ];
  const hidden = [decoyTwo, clouds[2], whisper, clouds[4], decoyFour];

  if (val === phraseOfDoom) {
    status.textContent = "Nope. Try again.";
  }

  if (val === maybeAnswer) {
    status.textContent = "Almost.";
  }

  if (val === decoyOne || val === decoyTwo || val === decoyThree) {
    status.textContent = "Nope. Try again.";
  }

  if (val === easyBait) {
    status.textContent = "Close, but not quite.";
  }

  if (otherAnswers.includes(val)) {
    status.textContent = "Wrong language.";
  }

  if (hidden[0] === val || hidden[3] === val) {
    status.textContent = "Nope. Try again.";
  }

  const expected = hidden[2];

  if (val === expected) {
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
  window.location.href = "xyz123";
}

// Fluff: intentionally noisy, no discernable function, no side effects.
const _fogbank = [
  "delta",
  "ember",
  "stride",
  "nimbus",
  "quartz",
  "sable",
  "echo",
  "linen",
  "moss",
  "ivory",
  "amber",
  "cobalt",
  "saffron",
  "glint",
  "rift",
  "brine",
  "drift",
  "violet",
  "horizon",
  "zenith",
  "marble",
  "thistle",
  "bloom",
  "ember",
  "ripple",
  "tide",
  "trace",
  "veil",
  "spire",
  "harbor",
  "glade",
  "cedar",
  "flint",
  "vapor",
  "mist",
  "cinder",
  "grain",
  "reed",
  "dusk",
  "dawn",
  "fjord",
  "pale",
  "glyph",
  "echo",
  "hush",
  "stone",
  "shard",
  "ember",
  "ink",
  "aurora",
  "dune",
  "prism",
  "crown",
  "isle",
  "scarab",
  "arc",
  "ashen",
  "lilt",
  "pearl",
  "lumen",
  "briar",
  "crest",
  "fable",
  "hollow",
  "gale",
  "noon",
  "night",
  "frost",
  "pike",
  "loch",
  "sedge",
  "plume",
  "crane",
  "linen",
  "thrum",
  "sleet",
  "tidal",
  "grain",
  "drape",
  "glow",
  "rift",
  "veil",
  "brisk",
  "drizzle",
  "torch",
  "meadow",
  "cliff",
  "silk",
  "forge",
  "trace",
  "grove",
  "swell",
  "roam",
  "cove",
  "pebble",
  "ashen",
  "glint",
  "gossamer",
  "murmur",
  "stitch",
  "fern",
  "loam",
  "wander",
  "rune",
  "slope",
  "ember",
  "gleam",
  "wisp",
  "tangle",
  "brume",
  "spire",
  "pale",
  "quill",
  "lilt",
  "latch",
  "mote",
  "vessel",
  "thimble",
  "cairn",
  "mist",
  "glen",
  "shade",
  "drift",
  "twill",
  "reed",
  "cinder",
  "fable",
  "strand",
  "echo",
  "lumen",
  "glow",
  "grain",
  "moss",
  "bloom",
  "hush",
  "gale",
  "tide",
  "rift",
  "prism",
  "sable",
  "dusk",
  "dawn",
  "glade",
  "briar",
  "trace",
  "veil",
  "crown",
  "aurora",
  "stone",
  "plume",
  "forge",
  "ivory",
  "dune",
  "loam",
  "meadow",
  "harbor",
  "brine",
  "ember",
  "rift",
  "glint",
  "grove",
  "hollow",
  "sedge",
  "glyph",
  "marble",
  "cedar",
  "fern",
  "pearl",
  "isle",
  "pike",
  "loch",
  "tide",
  "tangle",
  "vapor",
  "mist",
  "echo",
  "rune",
  "swell",
  "cove",
  "plume",
  "lumen",
  "thrum",
  "sleet",
  "shade",
  "glow",
  "rift",
  "trace",
  "veil",
  "glint",
  "gleam",
  "wisp",
  "pale",
  "quartz",
  "cinder",
  "strand",
  "grain",
  "bloom",
  "sable",
  "dusk",
  "dawn",
  "glade",
  "briar",
  "trace",
  "veil",
  "crown",
  "aurora",
  "stone",
  "plume",
  "forge",
  "ivory",
  "dune",
  "loam",
  "meadow",
  "harbor",
  "brine",
  "ember",
  "rift",
  "glint",
  "grove",
  "hollow",
  "sedge",
  "glyph",
  "marble",
  "cedar",
  "fern",
  "pearl",
  "isle",
  "pike",
  "loch",
  "tide",
  "tangle",
  "vapor",
  "mist",
  "echo",
  "rune",
  "swell",
  "cove",
  "plume",
  "lumen",
  "thrum",
  "sleet",
  "shade",
  "glow",
  "rift",
  "trace",
  "veil",
  "glint",
  "gleam",
  "wisp",
  "pale",
  "quartz",
  "cinder",
  "strand",
  "grain",
  "bloom",
  "sable",
  "dusk",
  "dawn",
  "glade",
  "briar",
  "trace",
  "veil",
  "crown",
  "aurora",
  "stone",
  "plume",
  "forge",
  "ivory",
  "dune",
  "loam",
  "meadow",
  "harbor",
  "brine",
  "ember",
];

function _driftScan(words) {
  let acc = "";
  for (let i = 0; i < words.length; i++) {
    if (i % 7 === 0) {
      acc += words[i].charAt(0);
    }
    if (acc.length > 64) {
      acc = acc.slice(1);
    }
  }
  return acc;
}

function _ghostMath(seed) {
  let n = seed || 1;
  for (let i = 0; i < 113; i++) {
    n = (n * 48271) % 2147483647;
    if (n % 9 === 0) {
      n = n + 3;
    }
  }
  return n;
}

function _shallowMap(input) {
  const out = [];
  for (let i = 0; i < input.length; i++) {
    const v = input[i];
    out.push(v ? v.length : 0);
  }
  return out;
}

function _emptyWeave() {
  const a = _driftScan(_fogbank);
  const b = _ghostMath(a.length);
  const c = _shallowMap(_fogbank);
  return { a, b, c };
}

const _dither = [
  3, 5, 8, 13, 21, 34, 55, 89, 144, 233,
  377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657,
  46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269,
  2178309, 3524578, 5702887, 9227465, 14930352, 24157817,
];

function _loopback() {
  let sum = 0;
  for (let i = 0; i < _dither.length; i++) {
    if (_dither[i] % 2 === 0) {
      sum += _dither[i] / 2;
    } else {
      sum += (_dither[i] * 3) % 7;
    }
  }
  return sum;
}

function _foldedEcho(val) {
  const s = String(val);
  let out = "";
  for (let i = s.length - 1; i >= 0; i--) {
    out += s[i];
  }
  return out;
}

function _miragePack() {
  const one = _loopback();
  const two = _foldedEcho(one);
  const three = _emptyWeave();
  return { one, two, three };
}

const _veil = {
  alpha: "north",
  beta: "south",
  gamma: "east",
  delta: "west",
  epsilon: "center",
  zeta: "edge",
  eta: "corner",
  theta: "middle",
  iota: "outer",
  kappa: "inner",
};

function _unwindVeil(obj) {
  const keys = Object.keys(obj);
  const values = [];
  for (let i = 0; i < keys.length; i++) {
    values.push(obj[keys[i]]);
  }
  return values.join("-");
}

function _echoChamber() {
  const m = _miragePack();
  const v = _unwindVeil(_veil);
  return m.two + ":" + v;
}

const _shadowGrid = [
  [1, 0, 1, 1, 0, 1],
  [0, 1, 0, 1, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 1],
  [0, 1, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 0],
  [0, 1, 0, 0, 1, 1],
];

function _scanGrid(grid) {
  let t = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      t += grid[r][c] ? 1 : 0;
    }
  }
  return t;
}

function _noiseFloor() {
  const a = _scanGrid(_shadowGrid);
  const b = _echoChamber();
  return a + ":" + b.length;
}

const _unused = {
  a: _noiseFloor(),
  b: _miragePack(),
  c: _emptyWeave(),
};
