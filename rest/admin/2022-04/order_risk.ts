/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

<<<<<<< HEAD:rest/admin/2022-04/order_risk.ts
import {Base, FindAllResponse} from '../../base';
import {ResourcePath} from '../../types';
import {Session} from '../../../lib/session/session';
import {ApiVersion} from '../../../lib/types';
=======
import Base, {ResourcePath} from '../../base-rest-resource';
import {SessionInterface} from '../../auth/session/types';
import {ApiVersion} from '../../base-types';
>>>>>>> 1a149a83 (Add 2022-10 REST resources):src/rest-resources/2022-01/order_risk.ts

interface FindArgs {
  session: Session;
  id: number | string;
  order_id?: number | string | null;
}
interface DeleteArgs {
  session: Session;
  id: number | string;
  order_id?: number | string | null;
}
interface AllArgs {
  [key: string]: unknown;
  session: Session;
  order_id?: number | string | null;
}

export class OrderRisk extends Base {
  public static apiVersion = ApiVersion.April22;

  protected static resourceName = 'risk';
  protected static pluralName = 'risks';
  protected static hasOne: {[key: string]: typeof Base} = {};
  protected static hasMany: {[key: string]: typeof Base} = {};
  protected static paths: ResourcePath[] = [
    {"http_method": "delete", "operation": "delete", "ids": ["order_id", "id"], "path": "orders/<order_id>/risks/<id>.json"},
    {"http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/risks.json"},
    {"http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/risks/<id>.json"},
    {"http_method": "post", "operation": "post", "ids": ["order_id"], "path": "orders/<order_id>/risks.json"},
    {"http_method": "put", "operation": "put", "ids": ["order_id", "id"], "path": "orders/<order_id>/risks/<id>.json"}
  ];

  protected static getJsonBodyName(): string
  {
    return "risk";
  }

  public static async find(
    {
      session,
      id,
      order_id = null
    }: FindArgs
  ): Promise<OrderRisk | null> {
    const result = await this.baseFind<OrderRisk>({
      session: session,
      urlIds: {"id": id, "order_id": order_id},
      params: {},
    });
    return result.data ? result.data[0] : null;
  }

  public static async delete(
    {
      session,
      id,
      order_id = null
    }: DeleteArgs
  ): Promise<unknown> {
    const response = await this.request<OrderRisk>({
      http_method: "delete",
      operation: "delete",
      session: session,
      urlIds: {"id": id, "order_id": order_id},
      params: {},
    });

    return response ? response.body : null;
  }

  public static async all(
    {
      session,
      order_id = null,
      ...otherArgs
    }: AllArgs
  ): Promise<FindAllResponse<OrderRisk>> {
    const response = await this.baseFind<OrderRisk>({
      session: session,
      urlIds: {"order_id": order_id},
      params: {...otherArgs},
    });

    return response;
  }

  public cause_cancel: boolean | null;
  public checkout_id: number | null;
  public display: boolean | null;
  public id: number | null;
  public merchant_message: string | null;
  public message: string | null;
  public order_id: number | null;
  public recommendation: string | null;
  public score: string | null;
  public source: string | null;
}
