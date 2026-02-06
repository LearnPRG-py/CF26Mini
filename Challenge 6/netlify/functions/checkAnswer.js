export async function handler(event, context) {
  const { answer } = JSON.parse(event.body);
  if (answer.trim() === "287.35") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        url: "jazzy-marshmallow-30ac8f.netlify.app",
      }),
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: false,
        message: "Incorrect value, try again.",
      }),
    };
  }
}
