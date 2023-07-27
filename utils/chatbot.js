const { Configuration } = require("openai");
const { OpenAIApi } = require("openai");

const OPENAI_API_KEY = "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";

function chatBot(text, callback) {
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const getResponse = async () => {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
    });
    callback(completion.data.choices[0].message.content);
  };
  getResponse();
}

module.exports = chatBot;
