/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

<<<<<<< HEAD
<<<<<<< HEAD:rest/admin/2022-07/discount_code.ts
import {Base, FindAllResponse} from '../../base';
import {ResourcePath} from '../../types';
import {Session} from '../../../lib/session/session';
import {ApiVersion} from '../../../lib/types';
=======
import Base, {ResourcePath} from '../../base-rest-resource';
import {SessionInterface} from '../../auth/session/types';
import {ApiVersion} from '../../base-types';
>>>>>>> 1a149a83 (Add 2022-10 REST resources):src/rest-resources/2022-01/discount_code.ts
=======
import {Base} from '../../../lib/rest/base';
import {ResourcePath} from '../../../lib/rest/types';
import {SessionInterface} from '../../../lib/session/types';
import {ApiVersion} from '../../../lib/base-types';
>>>>>>> origin/improve_build_process

interface FindArgs {
  session: Session;
  id: number | string;
  price_rule_id?: number | string | null;
}
interface DeleteArgs {
  session: Session;
  id: number | string;
  price_rule_id?: number | string | null;
}
interface AllArgs {
  [key: string]: unknown;
  session: Session;
  price_rule_id?: number | string | null;
  batch_id?: number | string | null;
}
interface CountArgs {
  [key: string]: unknown;
  session: Session;
  times_used?: unknown;
  times_used_min?: unknown;
  times_used_max?: unknown;
}
interface GetAllArgs {
  [key: string]: unknown;
  session: Session;
  price_rule_id?: number | string | null;
  batch_id?: number | string | null;
}
interface LookupArgs {
  [key: string]: unknown;
  session: Session;
  code?: unknown;
}
interface BatchArgs {
  [key: string]: unknown;
  body?: {[key: string]: unknown} | null;
}

export class DiscountCode extends Base {
  public static apiVersion = ApiVersion.July22;

  protected static resourceName = 'discount_code';
  protected static pluralName = 'discount_codes';
  protected static hasOne: {[key: string]: typeof Base} = {};
  protected static hasMany: {[key: string]: typeof Base} = {};
  protected static paths: ResourcePath[] = [
    {"http_method": "delete", "operation": "delete", "ids": ["price_rule_id", "id"], "path": "price_rules/<price_rule_id>/discount_codes/<id>.json"},
    {"http_method": "get", "operation": "count", "ids": [], "path": "discount_codes/count.json"},
    {"http_method": "get", "operation": "get", "ids": ["price_rule_id", "batch_id"], "path": "price_rules/<price_rule_id>/batch/<batch_id>/discount_codes.json"},
    {"http_method": "get", "operation": "get", "ids": ["price_rule_id"], "path": "price_rules/<price_rule_id>/discount_codes.json"},
    {"http_method": "get", "operation": "get", "ids": ["price_rule_id", "id"], "path": "price_rules/<price_rule_id>/discount_codes/<id>.json"},
    {"http_method": "get", "operation": "get_all", "ids": ["price_rule_id", "batch_id"], "path": "price_rules/<price_rule_id>/batch/<batch_id>.json"},
    {"http_method": "get", "operation": "lookup", "ids": [], "path": "discount_codes/lookup.json"},
    {"http_method": "post", "operation": "batch", "ids": ["price_rule_id"], "path": "price_rules/<price_rule_id>/batch.json"},
    {"http_method": "post", "operation": "post", "ids": ["price_rule_id"], "path": "price_rules/<price_rule_id>/discount_codes.json"},
    {"http_method": "put", "operation": "put", "ids": ["price_rule_id", "id"], "path": "price_rules/<price_rule_id>/discount_codes/<id>.json"}
  ];

  public static async find(
    {
      session,
      id,
      price_rule_id = null
    }: FindArgs
  ): Promise<DiscountCode | null> {
    const result = await this.baseFind<DiscountCode>({
      session: session,
      urlIds: {"id": id, "price_rule_id": price_rule_id},
      params: {},
    });
    return result.data ? result.data[0] : null;
  }

  public static async delete(
    {
      session,
      id,
      price_rule_id = null
    }: DeleteArgs
  ): Promise<unknown> {
    const response = await this.request<DiscountCode>({
      http_method: "delete",
      operation: "delete",
      session: session,
      urlIds: {"id": id, "price_rule_id": price_rule_id},
      params: {},
    });

    return response ? response.body : null;
  }

  public static async all(
    {
      session,
      price_rule_id = null,
      batch_id = null,
      ...otherArgs
    }: AllArgs
  ): Promise<FindAllResponse<DiscountCode>> {
    const response = await this.baseFind<DiscountCode>({
      session: session,
      urlIds: {"price_rule_id": price_rule_id, "batch_id": batch_id},
      params: {...otherArgs},
    });

    return response;
  }

  public static async count(
    {
      session,
      times_used = null,
      times_used_min = null,
      times_used_max = null,
      ...otherArgs
    }: CountArgs
  ): Promise<unknown> {
    const response = await this.request<DiscountCode>({
      http_method: "get",
      operation: "count",
      session: session,
      urlIds: {},
      params: {"times_used": times_used, "times_used_min": times_used_min, "times_used_max": times_used_max, ...otherArgs},
      body: {},
      entity: null,
    });

    return response ? response.body : null;
  }

  public static async get_all(
    {
      session,
      price_rule_id = null,
      batch_id = null,
      ...otherArgs
    }: GetAllArgs
  ): Promise<unknown> {
    const response = await this.request<DiscountCode>({
      http_method: "get",
      operation: "get_all",
      session: session,
      urlIds: {"price_rule_id": price_rule_id, "batch_id": batch_id},
      params: {...otherArgs},
      body: {},
      entity: null,
    });

    return response ? response.body : null;
  }

  public static async lookup(
    {
      session,
      code = null,
      ...otherArgs
    }: LookupArgs
  ): Promise<unknown> {
    const response = await this.request<DiscountCode>({
      http_method: "get",
      operation: "lookup",
      session: session,
      urlIds: {},
      params: {"code": code, ...otherArgs},
      body: {},
      entity: null,
    });

    return response ? response.body : null;
  }

  public async batch(
    {
      body = null,
      ...otherArgs
    }: BatchArgs
  ): Promise<unknown> {
    const response = await this.request<DiscountCode>({
      http_method: "post",
      operation: "batch",
      session: this.session,
      urlIds: {"price_rule_id": this.price_rule_id},
      params: {...otherArgs},
      body: body,
      entity: this,
    });

    return response ? response.body : null;
  }

  public code: string | null;
  public created_at: string | null;
  public errors: {[key: string]: unknown} | null;
  public id: number | null;
  public price_rule_id: number | null;
  public updated_at: string | null;
  public usage_count: number | null;
}
