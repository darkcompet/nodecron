import { Request, Response, NextFunction } from "express";
import { ApiResponse, ApiSucceedResponse } from "../../common/api-responses";
import { Env } from "../../common/env";
import { DkCommander } from "@darkcompet/nodejs-core";

export default class TopController {
	async Get(req: Request, res: Response, next: NextFunction) {
		try {
			return res.json(new ApiSucceedResponse(`Express (${Env.current}-${Env.version}-${Env.debug})`));
		} catch (e: any) {
			return res.json(new ApiResponse(e.status ?? 500, Env.debug ? e.message : "Failed"));
		}
	}

	async Deploy(req: Request, res: Response, next: NextFunction) {
		try {
			const result = await DkCommander.RunAsync(`${Env.cronBatchPath}`);
			return res.json(`Deploy output: ${result.stdout}, error: ${result.stderr}`);
		} catch (e: any) {
			return res.json(new ApiResponse(e.status ?? 500, Env.debug ? e.message : "Failed"));
		}
	}
}
