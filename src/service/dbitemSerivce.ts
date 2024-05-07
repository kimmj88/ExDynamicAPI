import { excuteTransaction, TRANSACTION_TYPE } from 'database';
import { Param, ConfigParam } from 'commonBack';
import { API_DBITEM, RequestGetDbitem, RequestPostDbitem } from 'api';

export function createDbitemService(reqParam: RequestPostDbitem): Promise<any> {
    return new Promise((resolve, reject) => {
        const queryString: Param = {
            db_name: reqParam.db_name,
            path: `./${reqParam.db_name}.db`,
            dbtype_code: reqParam.dbtype_code.toString(),
        };
        const configParam: ConfigParam = { reqQeruy: queryString };
        return resolve(
            excuteTransaction(API_DBITEM, configParam, TRANSACTION_TYPE.INSERT));
    });
}

export function getDbitemService(reqParam?: RequestGetDbitem): Promise<any> {
    return new Promise((resolve, reject) => {
        const queryString: Param = {
            db_name: reqParam.db_name as string,
        };
        const configParam: ConfigParam = { reqQeruy: queryString };

        excuteTransaction(API_DBITEM, configParam, TRANSACTION_TYPE.SELECT).then(result => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    });
}

export function CreateDbitemTable(reqParam?: RequestGetDbitem): Promise<any> {
    return new Promise((resolve, reject) => {
        const queryString: Param = {
            db_name: reqParam.db_name as string,
        };
        const configParam: ConfigParam = { reqQeruy: queryString };

        excuteTransaction(API_DBITEM, configParam, TRANSACTION_TYPE.SELECT).then(result => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    });
}

