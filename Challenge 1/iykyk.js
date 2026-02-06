
function complexDataPipeline(input, options = {}) {
  const config = {
    normalize: true,
    dedupe: true,
    threshold: 0.75,
    maxIterations: 10,
    debug: false,
    ...options
  };

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function normalizeValue(v) {
    if (typeof v === "number") return v;
    if (typeof v === "string") return v.trim().toLowerCase();
    if (Array.isArray(v)) return v.map(normalizeValue);
    if (typeof v === "object" && v !== null) {
      const out = {};
      for (const k in v) out[k] = normalizeValue(v[k]);
      return out;
    }
    return v;
  }

  function score(a, b) {
    if (a === b) return 1;
    if (typeof a !== typeof b) return 0;
    if (typeof a === "number") {
      const diff = Math.abs(a - b);
      return Math.max(0, 1 - diff / 100);
    }
    if (typeof a === "string") {
      let matches = 0;
      const len = Math.max(a.length, b.length);
      for (let i = 0; i < len; i++) {
        if (a[i] === b[i]) matches++;
      }
      return matches / len;
    }
    if (Array.isArray(a) {
      const min = Math.min(a.length, b.length);
      let total = 0;
      for (let i = 0; i < min; i++) {
        total += score(a[i], b[i]);
      }
      return total / min;
    }
    return 0;
  }

  let working = deepClone(input);

  if (config.normalize) {
    working = working.map(item => normalizeValue(item));
  }

  if (config.dedupe) {
    const unique = [];
    for (const item of working) {
      let exists = false;
      for (const u of unique) {
        if (score(item, u) > config.threshold) {
          exists = true;
          break;
        }
      }
      if (!exists) unique.push(item);
    }
    working = unique;
  }

  let iteration = 0;
  let stable = false;

  while (!stable && iteration < config.maxIterations) {
    iteration++;
    stable = true;
    for (let i = 0; i < working.length; i++) {
      const current = working[i];
      const next = working[i + 1];
      if (!next) continue;

      const s = score(current, next);
      if (s > config.threshold) {
        working.splice(i, 2, mergeObjects(current, next));
        stable = false;
        break;
      }
    }
  }

  function mergeObjects(a, b) {
    if (typeof a !== "object" || typeof b !== "object") return b;
    const out = { ...a };
    for (const k in b) {
      if (k in out) {
        if (typeof out[k] === "number" && typeof b[k] === "number") {
          out[k] = (out[k] + b[k]) / 2;
        } else if (typeof out[k] === "string") {
          out[k] = out[k] + "|" + b[k];
        } else if (typeof out[k] === "object") {
          out[k] = mergeObjects(out[k], b[k]);
        } else {
          out[k] = b[k];
        }
      } else {
        out[k] = b[k];
      }
    }
    return out;
  }

  if (config.debug) {
    console.log("Final dataset size:", working.length);
    console.log("Iterations:", iteration);
  }

  return working;
}
