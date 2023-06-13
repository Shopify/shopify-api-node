/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

<<<<<<< HEAD:rest/admin/2022-04/location.ts
import {Base, FindAllResponse} from '../../base';
import {ResourcePath} from '../../types';
import {Session} from '../../../lib/session/session';
import {ApiVersion} from '../../../lib/types';
=======
import Base, {ResourcePath} from '../../base-rest-resource';
import {SessionInterface} from '../../auth/session/types';
import {ApiVersion} from '../../base-types';
<<<<<<< HEAD:rest/admin/2022-04/location.ts
>>>>>>> 1a149a83 (Add 2022-10 REST resources):src/rest-resources/2022-04/location.ts
=======
>>>>>>> origin/isomorphic/main:src/rest-resources/2021-04/location.ts

interface FindArgs {
  session: Session;
  id: number | string;
}
interface AllArgs {
  [key: string]: unknown;
  session: Session;
}
interface CountArgs {
  [key: string]: unknown;
  session: Session;
}
interface InventoryLevelsArgs {
  [key: string]: unknown;
  session: Session;
  id: number | string;
}

export class Location extends Base {
  public static apiVersion = ApiVersion.April22;

<<<<<<< HEAD:rest/admin/2022-04/location.ts
  protected static resourceName = 'location';
  protected static pluralName = 'locations';
  protected static hasOne: {[key: string]: typeof Base} = {};
  protected static hasMany: {[key: string]: typeof Base} = {};
  protected static paths: ResourcePath[] = [
    {"http_method": "get", "operation": "count", "ids": [], "path": "locations/count.json"},
    {"http_method": "get", "operation": "get", "ids": [], "path": "locations.json"},
    {"http_method": "get", "operation": "get", "ids": ["id"], "path": "locations/<id>.json"},
=======
  protected static NAME = 'location';
  protected static PLURAL_NAME = 'locations';
  protected static HAS_ONE: {[key: string]: typeof Base} = {};
  protected static HAS_MANY: {[key: string]: typeof Base} = {};
  protected static PATHS: ResourcePath[] = [
    {"http_method": "get", "operation": "get", "ids": [], "path": "locations.json"},
    {"http_method": "get", "operation": "get", "ids": ["id"], "path": "locations/<id>.json"},
    {"http_method": "get", "operation": "count", "ids": [], "path": "locations/count.json"},
>>>>>>> origin/isomorphic/main:src/rest-resources/2021-04/location.ts
    {"http_method": "get", "operation": "inventory_levels", "ids": ["id"], "path": "locations/<id>/inventory_levels.json"}
  ];

  public static async find(
    {
      session,
      id
    }: FindArgs
  ): Promise<Location | null> {
    const result = await this.baseFind<Location>({
      session: session,
      urlIds: {"id": id},
      params: {},
    });
    return result.data ? result.data[0] : null;
  }

  public static async all(
    {
      session,
      ...otherArgs
    }: AllArgs
  ): Promise<FindAllResponse<Location>> {
    const response = await this.baseFind<Location>({
      session: session,
      urlIds: {},
      params: {...otherArgs},
    });

    return response;
  }

  public static async count(
    {
      session,
      ...otherArgs
    }: CountArgs
  ): Promise<unknown> {
    const response = await this.request<Location>({
      http_method: "get",
      operation: "count",
      session: session,
      urlIds: {},
      params: {...otherArgs},
      body: {},
      entity: null,
    });

    return response ? response.body : null;
  }

  public static async inventory_levels(
    {
      session,
      id,
      ...otherArgs
    }: InventoryLevelsArgs
  ): Promise<unknown> {
    const response = await this.request<Location>({
      http_method: "get",
      operation: "inventory_levels",
      session: session,
      urlIds: {"id": id},
      params: {...otherArgs},
      body: {},
      entity: null,
    });

    return response ? response.body : null;
  }

  public active: boolean | null;
  public address1: string | null;
  public address2: string | null;
  public city: string | null;
  public country: string | null;
  public country_code: string | null;
  public created_at: string | null;
  public id: number | null;
  public legacy: boolean | null;
  public localized_country_name: string | null;
  public localized_province_name: string | null;
  public name: string | null;
  public phone: string | null;
  public province: string | null;
  public province_code: string | null;
  public updated_at: string | null;
  public zip: string | null;
}
