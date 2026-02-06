exports.handler = async () => {
  return {
    statusCode: 302,
    headers: {
      Location: "https://sweet-granita-2d58fb.netlify.app/"
    }
  };
};
