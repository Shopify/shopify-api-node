/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

import {Session} from '../../../auth/session';
import {Context} from '../../../context';
import {ApiVersion} from '../../../base-types';

import {Balance} from '../../2022-07';

describe('Balance resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const test_session = new Session('1234', domain, '1234', true);
  test_session.accessToken = 'this_is_a_test_token';

  beforeEach(() => {
    Context.API_VERSION = ApiVersion.July22;
  });

  it('test_1', async () => {
<<<<<<< HEAD:src/rest-resources/__tests__/2022-07/balance.test.ts
    fetchMock.mockResponseOnce(JSON.stringify({"balance": [{"amount": "53.99", "currency": "USD"}]}));
=======
    fetchMock.mockResponseOnce(JSON.stringify({"balance": [{"currency": "USD", "amount": "53.99"}]}));
>>>>>>> origin/isomorphic/main:src/rest-resources/__tests__/2021-10/balance.test.ts

    await Balance.all({
      session: test_session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-07/shopify_payments/balance.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

});
