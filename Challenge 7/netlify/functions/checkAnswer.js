export async function handler(event, context) {
  const { answer } = JSON.parse(event.body);
  if (answer.trim() === "16") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        url: "https://github.com/LearnPRG-py/EpikCodefestIdeaz",
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
