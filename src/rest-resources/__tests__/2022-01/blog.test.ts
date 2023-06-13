/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

import {Session} from '../../../auth/session';
import {Context} from '../../../context';
import {ApiVersion} from '../../../base-types';

import {Blog} from '../../2022-01';

describe('Blog resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const test_session = new Session('1234', domain, '1234', true);
  test_session.accessToken = 'this_is_a_test_token';

  beforeEach(() => {
    Context.API_VERSION = ApiVersion.January22;
  });

  it('test_1', async () => {
<<<<<<< HEAD
    fetchMock.mockResponseOnce(JSON.stringify({"blogs": [{"id": 382285388, "handle": "banana-blog", "title": "A Gnu Blog", "updated_at": "2006-02-02T19:00:00-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-10-03T12:44:45-04:00", "template_suffix": null, "tags": "", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/382285388"}, {"id": 241253187, "handle": "apple-blog", "title": "Mah Blog", "updated_at": "2006-02-01T19:00:00-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-10-03T12:44:45-04:00", "template_suffix": null, "tags": "Announcing, Mystery", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"}]}));
=======
    fetchMock.mockResponseOnce(JSON.stringify({"blogs": [{"id": 382285388, "handle": "banana-blog", "title": "A Gnu Blog", "updated_at": "2006-02-02T19:00:00-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-02-03T17:14:40-05:00", "template_suffix": null, "tags": "", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/382285388"}, {"id": 241253187, "handle": "apple-blog", "title": "Mah Blog", "updated_at": "2006-02-01T19:00:00-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-02-03T17:14:40-05:00", "template_suffix": null, "tags": "Announcing, Mystery", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"}]}));
>>>>>>> origin/isomorphic/main

    await Blog.all({
      session: test_session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-01/blogs.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_2', async () => {
<<<<<<< HEAD
    fetchMock.mockResponseOnce(JSON.stringify({"blogs": [{"id": 382285388, "handle": "banana-blog", "title": "A Gnu Blog", "updated_at": "2006-02-02T19:00:00-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-10-03T12:44:45-04:00", "template_suffix": null, "tags": "", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/382285388"}, {"id": 1008414252, "handle": "apple-main-blog", "title": "Apple main blog", "updated_at": "2022-10-03T13:06:38-04:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-10-03T13:06:38-04:00", "template_suffix": null, "tags": "", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/1008414252"}]}));
=======
    fetchMock.mockResponseOnce(JSON.stringify({"blogs": [{"id": 382285388, "handle": "banana-blog", "title": "A Gnu Blog", "updated_at": "2006-02-02T19:00:00-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-02-03T17:14:40-05:00", "template_suffix": null, "tags": "", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/382285388"}, {"id": 1008414258, "handle": "apple-main-blog", "title": "Apple main blog", "updated_at": "2022-02-03T17:15:51-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-02-03T17:15:51-05:00", "template_suffix": null, "tags": "", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/1008414258"}]}));
>>>>>>> origin/isomorphic/main

    await Blog.all({
      session: test_session,
      since_id: "241253187",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-01/blogs.json',
      query: 'since_id=241253187',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_3', async () => {
<<<<<<< HEAD
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"id": 1008414248, "handle": "apple-main-blog", "title": "Apple main blog", "updated_at": "2022-10-03T13:06:19-04:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-10-03T13:06:19-04:00", "template_suffix": null, "tags": "", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/1008414248"}}));
=======
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"id": 1008414261, "handle": "apple-main-blog", "title": "Apple main blog", "updated_at": "2022-02-03T17:16:00-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-02-03T17:16:00-05:00", "template_suffix": null, "tags": "", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/1008414261"}}));
>>>>>>> origin/isomorphic/main

    const blog = new Blog({session: test_session});
    blog.title = "Apple main blog";
    await blog.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2022-01/blogs.json',
      query: '',
      headers,
      data: { "blog": {"title": "Apple main blog"} }
    }).toMatchMadeHttpRequest();
  });

  it('test_4', async () => {
<<<<<<< HEAD
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"id": 1008414250, "handle": "apple-main-blog", "title": "Apple main blog", "updated_at": "2022-10-03T13:06:31-04:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-10-03T13:06:31-04:00", "template_suffix": null, "tags": "", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/1008414250"}}));
=======
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"id": 1008414262, "handle": "apple-main-blog", "title": "Apple main blog", "updated_at": "2022-02-03T17:16:03-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-02-03T17:16:03-05:00", "template_suffix": null, "tags": "", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/1008414262"}}));
>>>>>>> origin/isomorphic/main

    const blog = new Blog({session: test_session});
    blog.title = "Apple main blog";
    blog.metafields = [
      {
        "key": "sponsor",
        "value": "Shopify",
        "type": "single_line_text_field",
        "namespace": "global"
      }
    ];
    await blog.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2022-01/blogs.json',
      query: '',
      headers,
      data: { "blog": {"title": "Apple main blog", "metafields": [{"key": "sponsor", "value": "Shopify", "type": "single_line_text_field", "namespace": "global"}]} }
    }).toMatchMadeHttpRequest();
  });

  it('test_5', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({"count": 2}));

    await Blog.count({
      session: test_session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-01/blogs/count.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_6', async () => {
<<<<<<< HEAD
=======
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"id": 241253187, "handle": "apple-blog", "title": "Mah Blog", "updated_at": "2006-02-01T19:00:00-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-02-03T17:14:40-05:00", "template_suffix": null, "tags": "Announcing, Mystery", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"}}));

    await Blog.find({
      session: test_session,
      id: 241253187,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-01/blogs/241253187.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_7', async () => {
>>>>>>> origin/isomorphic/main
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"id": 241253187, "title": "Mah Blog"}}));

    await Blog.find({
      session: test_session,
      id: 241253187,
      fields: "id,title",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-01/blogs/241253187.json',
      query: 'fields=id%2Ctitle',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_7', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"id": 241253187, "handle": "apple-blog", "title": "Mah Blog", "updated_at": "2006-02-01T19:00:00-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-10-03T12:44:45-04:00", "template_suffix": null, "tags": "Announcing, Mystery", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"}}));

    await Blog.find({
      session: test_session,
      id: 241253187,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2022-01/blogs/241253187.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_8', async () => {
<<<<<<< HEAD
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"title": "IPod Updates", "handle": "apple-blog", "id": 241253187, "updated_at": "2022-10-03T13:06:22-04:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-10-03T12:44:45-04:00", "template_suffix": null, "tags": "Announcing, Mystery", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"}}));
=======
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"title": "IPod Updates", "handle": "apple-blog", "id": 241253187, "updated_at": "2022-02-03T17:16:08-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-02-03T17:14:40-05:00", "template_suffix": null, "tags": "Announcing, Mystery", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"}}));
>>>>>>> origin/isomorphic/main

    const blog = new Blog({session: test_session});
    blog.id = 241253187;
    blog.title = "IPod Updates";
    await blog.save({});

    expect({
      method: 'PUT',
      domain,
      path: '/admin/api/2022-01/blogs/241253187.json',
      query: '',
      headers,
<<<<<<< HEAD
      data: { "blog": {"title": "IPod Updates"} }
=======
      data: { "blog": {"id": 241253187, "title": "IPod Updates"} }
>>>>>>> origin/isomorphic/main
    }).toMatchMadeHttpRequest();
  });

  it('test_9', async () => {
<<<<<<< HEAD
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"title": "IPod Updates", "handle": "ipod-updates", "commentable": "moderate", "id": 241253187, "updated_at": "2022-10-03T13:06:29-04:00", "feedburner": null, "feedburner_location": null, "created_at": "2022-10-03T12:44:45-04:00", "template_suffix": null, "tags": "Announcing, Mystery", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"}}));
=======
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"title": "IPod Updates", "handle": "ipod-updates", "commentable": "moderate", "id": 241253187, "updated_at": "2022-02-03T17:16:09-05:00", "feedburner": null, "feedburner_location": null, "created_at": "2022-02-03T17:14:40-05:00", "template_suffix": null, "tags": "Announcing, Mystery", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"}}));
>>>>>>> origin/isomorphic/main

    const blog = new Blog({session: test_session});
    blog.id = 241253187;
    blog.title = "IPod Updates";
    blog.handle = "ipod-updates";
    blog.commentable = "moderate";
    await blog.save({});

    expect({
      method: 'PUT',
      domain,
      path: '/admin/api/2022-01/blogs/241253187.json',
      query: '',
      headers,
<<<<<<< HEAD
      data: { "blog": {"title": "IPod Updates", "handle": "ipod-updates", "commentable": "moderate"} }
=======
      data: { "blog": {"id": 241253187, "title": "IPod Updates", "handle": "ipod-updates", "commentable": "moderate"} }
>>>>>>> origin/isomorphic/main
    }).toMatchMadeHttpRequest();
  });

  it('test_10', async () => {
<<<<<<< HEAD
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"title": "Mah Blog", "handle": "apple-blog", "id": 241253187, "updated_at": "2022-10-03T13:06:34-04:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-10-03T12:44:45-04:00", "template_suffix": null, "tags": "Announcing, Mystery", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"}}));
=======
    fetchMock.mockResponseOnce(JSON.stringify({"blog": {"title": "Mah Blog", "handle": "apple-blog", "id": 241253187, "updated_at": "2022-02-03T17:16:11-05:00", "commentable": "no", "feedburner": null, "feedburner_location": null, "created_at": "2022-02-03T17:14:40-05:00", "template_suffix": null, "tags": "Announcing, Mystery", "admin_graphql_api_id": "gid://shopify/OnlineStoreBlog/241253187"}}));
>>>>>>> origin/isomorphic/main

    const blog = new Blog({session: test_session});
    blog.id = 241253187;
    blog.metafields = [
      {
        "key": "sponsor",
        "value": "Shopify",
        "type": "single_line_text_field",
        "namespace": "global"
      }
    ];
    await blog.save({});

    expect({
      method: 'PUT',
      domain,
      path: '/admin/api/2022-01/blogs/241253187.json',
      query: '',
      headers,
<<<<<<< HEAD
      data: { "blog": {"metafields": [{"key": "sponsor", "value": "Shopify", "type": "single_line_text_field", "namespace": "global"}]} }
=======
      data: { "blog": {"id": 241253187, "metafields": [{"key": "sponsor", "value": "Shopify", "type": "single_line_text_field", "namespace": "global"}]} }
>>>>>>> origin/isomorphic/main
    }).toMatchMadeHttpRequest();
  });

  it('test_11', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    await Blog.delete({
      session: test_session,
      id: 241253187,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2022-01/blogs/241253187.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

});
