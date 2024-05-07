import { excuteTransaction, TRANSACTION_TYPE } from 'database';
import { Param, ConfigParam } from 'commonBack';
import { API_PROFILE, RequestGetProfile } from 'api';

export function getProfileService(reqParam: RequestGetProfile): Promise<any> {
  return new Promise((resolve, reject) => {
    const queryString: Param = {
      section: reqParam.section,
      entry: reqParam.entry,
    };
    const configParam: ConfigParam = { reqQeruy: queryString };
    resolve(
      excuteTransaction(API_PROFILE, configParam, TRANSACTION_TYPE.SELECT)
    );
  });
}