exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");
    const guess = (body.value || "").trim();
    const expected = "hello"; 

    if (guess === expected) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          correct: true,
          next: "https://dainty-taffy-0308e5.netlify.app/"
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ correct: false })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" })
    };
  }
};
