const cron = require('node-cron');

import { DkCommander } from '@darkcompet/nodejs-core';
import { Env } from '../common/env';

class _CronJob {
	jobIdCounter = 0;

	constructor() { }

	/**
	 * Start cronjob after 10s every minute.
	 */
	Start() {
		// *	(all value) sử dụng trong trường hợp tất cả các giá trị đều đúng.
		// -	(range of values -) sử dụng để mô tả khoảng giá trị
		// ,	(value list separator) sử dụng để liệt kê các giá trị
		// /	(step values) sử dụng để chỉ rõ số lần tăng
		// Ref: https://www.npmjs.com/package/node-cron
		// Ref: https://viblo.asia/p/cron-jon-nodejs-voi-node-cron-924lJ4kbKPM
		// Ref: https://www.freecodecamp.org/news/schedule-a-job-in-node-with-nodecron

		// const sec = "10"; // 0-59
		// const min = "*"; // 0-59
		// const hour = "*"; // 0-23
		// const dayInMonth = "*"; // 1-31
		// const month = "*"; // 1-12 or JAN-DEC
		// const dayOfWeek = "*"; // 0-7 or SUN-SAT (0 and 7 refer to sunday)
		// const cronExpression = `${sec} ${min} ${hour} ${dayInMonth} ${month} ${dayOfWeek}`;

		cron.schedule(Env.cronExpression, async () => {
			const jobId = ++this.jobIdCounter;
			console.log(`<< Job ${jobId} started`);

			const result = await DkCommander.RunAsync(Env.cronBatchPath);
			if (result.stdout) {
				console.log("=> out: " + result.stdout);
			}
			if (result.stderr) {
				console.log("=> err: " + result.stderr);
			}

			console.log(`>> Job ${jobId} ended`);
		});
	}
}

export const CronJob = new _CronJob();
