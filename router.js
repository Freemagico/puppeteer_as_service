const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) =>{
	ctx.body = 'hello'
});

router.get('/request', async (ctx) => {
	const url = ctx.query.url;
	const getPage = await require('./utils/puppeteer');
	const page = await getPage();
	await page.goto(url);
	ctx.body = await page.evaluate(() => document.body.innerHTML)
});

module.exports = router;