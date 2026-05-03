require('dotenv').config();
const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const { Resend } = require('resend');
const path = require('path');

const app = new Koa();
const router = new Router();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(serve(path.join(__dirname, 'public')));
app.use(bodyParser()); // Для парсингу JSON

// API ендпоінт
router.post('/api/contact', async (ctx) => {
  const { name, email, subject, message } = ctx.request.body;

  // Базова валідація
  if (!name || !email || !subject || !message) {
    ctx.status = 400;
    ctx.body = { error: 'Усі поля є обов\'язковими' };
    return;
  }

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Default від Resend для тестів
      to: ['kvitcenkonikita6@gmail.com'], 
      subject: `Повідомлення від ${name}: ${subject}`,
      html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`
    });
    ctx.status = 200;
    ctx.body = { success: true };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Не вдалося відправити повідомлення' };
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});