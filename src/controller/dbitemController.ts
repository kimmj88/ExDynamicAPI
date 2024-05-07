import { NextFunction, Request, Response, Router } from 'express';
import {
    HTTP_STATUS_CODE,
    DATABASE_STATUS_CODE,
    databaseMsg,
    HttpException,
    BaseRouter, ResponsePost
} from 'commonBack';
import {
    RequestPostDbitem,
    API_DBITEM,
    ResponseLoadDbitem,
    RequestGetDbitem,
} from 'api'
import { createDbitemService, getDbitemService } from 'service';
import { Dbitem } from 'class';

export class DbitemController extends BaseRouter {
    constructor() {
        super(`/${API_DBITEM}`, Router());
        this.initalizeRoutes();
    }
    public initalizeRoutes() {
        this.router.get(this.path, this.getDBitem);
        this.router.post(this.path, this.CreateDbitem);

    }

    CreateDbitem = async (
        req: Request,
        res: Response<ResponsePost>,
        next: NextFunction
    ) => {
        let resPost: ResponsePost;
        try {
            const reqParam: RequestPostDbitem = {
                db_name: req.query.db_name as string,
                dbtype_code: Number(req.query.dbtype_code)
            };

            resPost = {
                lastID: await createDbitemService(reqParam),
                message: databaseMsg.get(DATABASE_STATUS_CODE.OK) as string,
                result: true,
            };

            res.status(HTTP_STATUS_CODE.OK).json(resPost);
        } catch (error) {
            next(new HttpException(HTTP_STATUS_CODE.SERVER_ERR, error as string));
        }
    };


    getDBitem = async (
        req: Request,
        res: Response<ResponseLoadDbitem>,
        next: NextFunction
    ) => {
        try {
            const reqParam: RequestGetDbitem = {
                db_name: req.query.db_name as string,
            };
            const profiles: Dbitem[] = await getDbitemService(reqParam);

            const result: ResponseLoadDbitem = {
                dbitems: profiles,
                row_count: profiles.length,
                message:
                    profiles.length === 0
                        ? (databaseMsg.get(DATABASE_STATUS_CODE.NODATA) as string)
                        : (databaseMsg.get(DATABASE_STATUS_CODE.OK) as string),
            };

            res.status(HTTP_STATUS_CODE.OK).json(result);
        } catch (error) {
            next(new HttpException(HTTP_STATUS_CODE.SERVER_ERR, error as string));
        }
    };
}