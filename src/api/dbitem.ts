import { Dbitem } from 'class'
import { ResponseGet } from 'commonBack'

export const API_DBITEM = 'dbitem';

//#endregion

//#region Requst
export interface RequestGetDbitem {
    db_name: string;
}

export interface RequestPostDbitem {
    db_name: string;
    dbtype_code: number;
}

//#endregion

//#region Response

export interface ResponseLoadDbitem extends ResponseGet {
    dbitems: Dbitem[];
}

export interface ResponseData extends ResponseGet {
    rows: any[];
}

export interface Request {
    db_name: string;
    table_name: string;
}

//#endregion
