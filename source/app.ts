const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();


//
// Import from here (go after dotenv config)
//
import { Request, Response, NextFunction } from 'express';
import { Env } from "./common/env";
import { CronJob } from './job/cronjob';

// Ignore ssl certificate at develop env
if (Env.isDevelop) {
	process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
}

// [Import api routes]
import indexRouter from './presentation/routes/index';

const app = express();

// [Setup view engine]
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// [Map api routes]
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
	next(createError(404));
});

// Error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
	// Set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = Env.isDevelop ? err : {};

	// Render the error page
	res.status(err.status || 500);
	res.render('error');
});

// Start cronjob
CronJob.Start();

module.exports = app;
