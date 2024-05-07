import sqlite from 'sqlite3';
import { logger } from 'commonBack'

export class Dbitem {
    path: string;
    db_name: string;
    database: sqlite.Database;
    constructor(_name, _path) {
        this.db_name = _name;
        this.path = _path;
        this.database = new sqlite.Database(`./${this.db_name}.db`, (e) => {
            logger.error(`err database : ${e}`);
        });
    }
}