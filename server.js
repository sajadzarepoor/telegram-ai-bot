const { Telegraf } = require("telegraf");
const chatBot = require("./utils/chatbot");
const messages = require("./utils/messages/messages.js");

// config telegraf
const botToken = "6478351623:AAH_5rFNxBx0qrHWLNu4xgvl0l2IvkN2tzc";
const bot = new Telegraf(botToken);
//

//bot commands configuration

bot.start((ctx) => {
  ctx.reply(
    `سلام ${ctx.message.from.first_name} عزیز به هوش ابزار خوش اومدی .
برای استفاده از ربات از دکمه‌های زیر استفاده کن 👇`,
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "گفت‌وگو با چت‌بات 🗨️",
            },
            {
              text: "اخبار و مقالات 🌐",
            },
          ],
          [
            {
              text: "نقشه راه و منابع 📎",
            },
            {
              text: "ابزارهای هوش مصنوعی ⚒️",
            },
          ],
          [
            {
              text: "راهنما 👩🏻‍💻",
            },
          ],
        ],
      },
    }
  );
});

bot.hears("گفت‌وگو با چت‌بات 🗨️", (ctx) => {
  //*11
  ctx.reply(messages.chatbotMessage, {
    reply_markup: {
      keyboard: [
        [
          {
            text: "بازگشت 🔙",
          },
        ],
      ],
    },
  });
  bot.hears("بازگشت 🔙", (ctx) => {
    ctx.reply("انتخاب جدید خودت رو وارد کن 👇", {
      reply_markup: {
        keyboard: [
          [
            {
              text: "گفت‌وگو با چت‌بات 🗨️",
            },
            {
              text: "اخبار و مقالات 🌐",
            },
          ],
          [
            {
              text: "نقشه راه و منابع 📎",
            },
            {
              text: "ابزارهای هوش مصنوعی ⚒️",
            },
          ],
          [
            {
              text: "راهنما 👩🏻‍💻",
            },
          ],
        ],
      },
    });
  });
  bot.on("text", (ctx) => {
    chatBot(ctx.message.text, (res) => {
      ctx.reply(res);
    });
  });
});

bot.launch();
