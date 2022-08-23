// Readonly
class _Env {
	readonly current = process.env.ENVIRONMENT!!;
	readonly debug = process.env.DEBUG === "true";
	readonly version = process.env.VERSION!!;

	readonly isDevelopment = process.env.ENVIRONMENT === "development";
	readonly isStaging = process.env.ENVIRONMENT === "staging";
	readonly isProduction = process.env.ENVIRONMENT === "production";

	readonly cronExpression = process.env.CRON_EXPRESSION!!;
	readonly cronBatchPath = process.env.CRON_BATCH_PATH!!;
}

export const Env = new _Env();
