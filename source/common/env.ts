// Readonly
class _Env {
	readonly current = process.env.ENVIRONMENT!!;
	readonly debug = process.env.DEBUG === "true";
	readonly version = process.env.VERSION!!;

	readonly isDevelop = process.env.ENVIRONMENT === "develop";
	readonly isStaging = process.env.ENVIRONMENT === "staging";
	readonly isProduction = process.env.ENVIRONMENT === "production";

	readonly deployCronExpression = process.env.DEPLOY_CRON_EXPRESSION!!;
	readonly deployCommand = process.env.DEPLOY_BATCH_PATH!!;

	readonly deployNextCommand = process.env.DEPLOY_NEXT_BATCH_PATH!!;
}

export const Env = new _Env();
