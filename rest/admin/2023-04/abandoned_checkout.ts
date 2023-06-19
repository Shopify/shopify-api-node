/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

<<<<<<< HEAD:rest/admin/2023-04/abandoned_checkout.ts
import {Base} from '../../base';
import {ResourcePath} from '../../types';
import {Session} from '../../../lib/session/session';
import {ApiVersion} from '../../../lib/types';
=======
import Base, {ResourcePath} from '../../base-rest-resource';
import {SessionInterface} from '../../auth/session/types';
import {ApiVersion} from '../../base-types';
>>>>>>> 1a149a83 (Add 2022-10 REST resources):src/rest-resources/2022-04/abandoned_checkout.ts

import {Currency} from './currency';
import {Customer} from './customer';
import {DiscountCode} from './discount_code';

interface CheckoutsArgs {
  [key: string]: unknown;
<<<<<<< HEAD:rest/admin/2023-04/abandoned_checkout.ts
  session: Session;
=======
  session: SessionInterface;
>>>>>>> 1a149a83 (Add 2022-10 REST resources):src/rest-resources/2022-04/abandoned_checkout.ts
  since_id?: unknown;
  created_at_min?: unknown;
  created_at_max?: unknown;
  updated_at_min?: unknown;
  updated_at_max?: unknown;
  status?: unknown;
  limit?: unknown;
}

export class AbandonedCheckout extends Base {
  public static apiVersion = ApiVersion.April23;

  protected static resourceName = 'abandoned_checkout';
  protected static pluralName = 'abandoned_checkouts';
  protected static hasOne: {[key: string]: typeof Base} = {
    "currency": Currency,
    "customer": Customer
  };
  protected static hasMany: {[key: string]: typeof Base} = {
    "discount_codes": DiscountCode
  };
<<<<<<< HEAD:rest/admin/2023-04/abandoned_checkout.ts
  protected static paths: ResourcePath[] = [
=======
  protected static PATHS: ResourcePath[] = [
>>>>>>> 1a149a83 (Add 2022-10 REST resources):src/rest-resources/2022-04/abandoned_checkout.ts
    {"http_method": "get", "operation": "checkouts", "ids": [], "path": "checkouts.json"},
    {"http_method": "get", "operation": "checkouts", "ids": [], "path": "checkouts.json"}
  ];

  public static async checkouts(
    {
      session,
      since_id = null,
      created_at_min = null,
      created_at_max = null,
      updated_at_min = null,
      updated_at_max = null,
      status = null,
      limit = null,
      ...otherArgs
    }: CheckoutsArgs
  ): Promise<unknown> {
    const response = await this.request<AbandonedCheckout>({
      http_method: "get",
      operation: "checkouts",
      session: session,
      urlIds: {},
      params: {"since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "status": status, "limit": limit, ...otherArgs},
      body: {},
      entity: null,
    });

    return response ? response.body : null;
  }

  public abandoned_checkout_url: string | null;
  public billing_address: {[key: string]: unknown} | null;
  public buyer_accepts_marketing: boolean | null;
  public buyer_accepts_sms_marketing: boolean | null;
  public cart_token: string | null;
  public closed_at: string | null;
  public completed_at: string | null;
  public created_at: string | null;
  public currency: Currency | null | {[key: string]: any};
  public customer: Customer | null | {[key: string]: any};
  public customer_locale: string | null;
  public device_id: number | null;
  public discount_codes: DiscountCode[] | null | {[key: string]: any};
  public email: string | null;
  public gateway: string | null;
  public id: number | null;
  public landing_site: string | null;
  public line_items: {[key: string]: unknown} | null;
  public location_id: number | null;
  public note: string | null;
  public phone: string | null;
  public presentment_currency: string | null;
  public referring_site: string | null;
  public shipping_address: {[key: string]: unknown} | null;
  public shipping_lines: {[key: string]: unknown} | null;
  public sms_marketing_phone: string | null;
  public source_name: string | null;
  public subtotal_price: string | null;
  public tax_lines: {[key: string]: unknown} | null;
  public taxes_included: boolean | null;
  public token: string | null;
  public total_discounts: string | null;
  public total_duties: string | null;
  public total_line_items_price: string | null;
  public total_price: string | null;
  public total_tax: string | null;
  public total_weight: number | null;
  public updated_at: string | null;
  public user_id: number | null;
}
