// Readonly
class _Env {
	readonly current = process.env.ENVIRONMENT!!;
	readonly debug = process.env.DEBUG === "true";
	readonly version = process.env.VERSION!!;

	readonly isDevelopment = process.env.ENVIRONMENT === "development";
	readonly isStaging = process.env.ENVIRONMENT === "staging";
	readonly isProduction = process.env.ENVIRONMENT === "production";

	readonly deployDevelopCronExpression = process.env.DEPLOY_DEVELOP_CRON_EXPRESSION!!;
	readonly deployDevelopCommand = process.env.DEPLOY_DEVELOP_BATCH_PATH!!;

	readonly deployStagingCommand = process.env.DEPLOY_STAGING_BATCH_PATH!!;
}

export const Env = new _Env();
