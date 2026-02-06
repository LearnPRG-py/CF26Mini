export async function handler(event, context) {
  const { answer } = JSON.parse(event.body);
  if (answer.trim() === "43") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        url: "https://sweet-granita-2d58fb.netlify.app/",
      }),
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: false,
        message: "Incorrect line number.",
      }),
    };
  }
}
