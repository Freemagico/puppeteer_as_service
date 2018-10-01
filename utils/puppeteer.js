const puppeteer = require('puppeteer');

const options = {
	args: ['--no-sandbox',
		'--disable-setuid-sandbox',
		'--disable-infobars',
		'--window-position=0,0',
		'--ignore-certifcate-errors',
		'--ignore-certifcate-errors-spki-list',
		`--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko)`],
	headless: true,
	ignoreHTTPSErrors: true,
	userDataDir: './tmp',
};

module.exports = (async () => {
	const browser = await puppeteer.launch(options);
	return async () => {
		const page = await browser.newPage();

		// 防止 page 未正确关闭，一分钟后自行关闭
		setTimeout(() => {
			page.close();
		}, 60000);

		return page;
	};
})();
