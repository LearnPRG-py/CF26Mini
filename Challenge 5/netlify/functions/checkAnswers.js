const answers = ["ow","or","ld","ll","he"];

export async function handler(event) {
  const { challenge, answer } = JSON.parse(event.body);

  if (challenge === "access") {
    if (answer.toLowerCase() === "hello world") {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          url: "https://hilarious-taiyaki-c278ae.netlify.app"
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: false })
    };
  }

  const correct = answer === answers[challenge];

  return {
    statusCode: 200,
    body: JSON.stringify({ success: correct })
  };
}
