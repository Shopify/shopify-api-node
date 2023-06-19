/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

<<<<<<< HEAD
<<<<<<< HEAD:rest/admin/2022-07/tender_transaction.ts
import {Base, FindAllResponse} from '../../base';
import {ResourcePath} from '../../types';
import {Session} from '../../../lib/session/session';
import {ApiVersion} from '../../../lib/types';
=======
import Base, {ResourcePath} from '../../base-rest-resource';
import {SessionInterface} from '../../auth/session/types';
import {ApiVersion} from '../../base-types';
>>>>>>> 1a149a83 (Add 2022-10 REST resources):src/rest-resources/2022-04/tender_transaction.ts
=======
import {Base} from '../../../lib/rest/base';
import {ResourcePath} from '../../../lib/rest/types';
import {SessionInterface} from '../../../lib/session/types';
import {ApiVersion} from '../../../lib/base-types';
>>>>>>> origin/improve_build_process

interface AllArgs {
  [key: string]: unknown;
  session: Session;
  limit?: unknown;
  since_id?: unknown;
  processed_at_min?: unknown;
  processed_at_max?: unknown;
  processed_at?: unknown;
  order?: unknown;
}

export class TenderTransaction extends Base {
  public static apiVersion = ApiVersion.July22;

  protected static resourceName = 'tender_transaction';
  protected static pluralName = 'tender_transactions';
  protected static hasOne: {[key: string]: typeof Base} = {};
  protected static hasMany: {[key: string]: typeof Base} = {};
  protected static paths: ResourcePath[] = [
    {"http_method": "get", "operation": "get", "ids": [], "path": "tender_transactions.json"}
  ];

  public static async all(
    {
      session,
      limit = null,
      since_id = null,
      processed_at_min = null,
      processed_at_max = null,
      processed_at = null,
      order = null,
      ...otherArgs
    }: AllArgs
  ): Promise<FindAllResponse<TenderTransaction>> {
    const response = await this.baseFind<TenderTransaction>({
      session: session,
      urlIds: {},
      params: {"limit": limit, "since_id": since_id, "processed_at_min": processed_at_min, "processed_at_max": processed_at_max, "processed_at": processed_at, "order": order, ...otherArgs},
    });

    return response;
  }

  public amount: string | null;
  public currency: string | null;
  public id: number | null;
  public order_id: number | null;
  public payment_details: {[key: string]: unknown} | null;
  public payment_method: string | null;
  public processed_at: string | null;
  public remote_reference: string | null;
  public test: boolean | null;
  public user_id: number | null;
}
