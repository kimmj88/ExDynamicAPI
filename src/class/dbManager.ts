import { RequestGetDbitem } from 'api';
import { Dbitem } from 'class'

import { getDbitemService } from 'service'

export class DbManager {
    private dbitems: Array<Dbitem>;
    constructor() {
        this.dbitems = new Array<Dbitem>
        getDbitemService({ db_name: '' } as RequestGetDbitem).then(rows => {
            for (const row of rows) {
                this.pushDatabase(row);
            }
        });
    }
    pushDatabase(row: any) {
        const item: Dbitem = new Dbitem(row.db_name, row.path);
        this.dbitems.push(item)
    }

}

