# DefaultApi

All URIs are relative to *https://devapi.hoot.mx*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteV1ConfConfId**](DefaultApi.md#deleteV1ConfConfId) | **DELETE** /v1/conf/{conf_id} | 
[**getCheckConfConfId**](DefaultApi.md#getCheckConfConfId) | **GET** /v1/check_conf/{conf_id} | Your GET endpoint
[**getSearchConferencesSearchString**](DefaultApi.md#getSearchConferencesSearchString) | **GET** /v1/search/conferences/{search_string} | Your GET endpoint
[**getUserUserIdSearchStrings**](DefaultApi.md#getUserUserIdSearchStrings) | **GET** /v1/user/{user_id}/search_strings | 
[**getUserUserUuidInvitedToConferences**](DefaultApi.md#getUserUserUuidInvitedToConferences) | **GET** /v1/user/{user_uuid}/invited_to_conferences | Your GET endpoint
[**getUserUserUuidLastJoined**](DefaultApi.md#getUserUserUuidLastJoined) | **GET** /v1/user/{user_uuid}/last_joined_conferences | Your GET endpoint
[**getV1ConfConfIdAllUsers**](DefaultApi.md#getV1ConfConfIdAllUsers) | **GET** /v1/conf/{conf_id}/all_users | Your GET endpoint
[**getV1SayHello**](DefaultApi.md#getV1SayHello) | **GET** /v1/say_hello | Say Hello
[**getV1Status**](DefaultApi.md#getV1Status) | **GET** /v1/status | Your GET endpoint
[**getXB64URL**](DefaultApi.md#getXB64URL) | **GET** /v1/x/{b64_URL} | Your GET endpoint
[**postLogin**](DefaultApi.md#postLogin) | **POST** /v1/login | 
[**postUserUserUuidSetFavouriteConferenceConfId**](DefaultApi.md#postUserUserUuidSetFavouriteConferenceConfId) | **POST** /v1/user/{user_uuid}/set_favourite_conference/{conf_id} | 
[**postUserUserUuidUnsetFavouriteConferenceConfId**](DefaultApi.md#postUserUserUuidUnsetFavouriteConferenceConfId) | **POST** /v1/user/{user_uuid}/unset_favourite_conference/{conf_id} | 
[**postV1CheckEntryCode**](DefaultApi.md#postV1CheckEntryCode) | **POST** /v1/check_entry_code | 
[**postV1CreateConferenceConferenceName**](DefaultApi.md#postV1CreateConferenceConferenceName) | **POST** /v1/create_conference/{conference_name} | 
[**postV1EditConferenceConferenceName**](DefaultApi.md#postV1EditConferenceConferenceName) | **POST** /v1/edit_conference/{conf_id} | 
[**putUserUserIdSearchStrings**](DefaultApi.md#putUserUserIdSearchStrings) | **PUT** /v1/user/{user_id}/search_strings/{search_string} | 
[**v1UserUserUuidFavouriteConferencesGet**](DefaultApi.md#v1UserUserUuidFavouriteConferencesGet) | **GET** /v1/user/{user_uuid}/favourite_conferences | 


<a name="deleteV1ConfConfId"></a>
# **deleteV1ConfConfId**
> Object deleteV1ConfConfId(conf\_id, Authorization)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conf\_id** | **String**|  | [default to null]
 **Authorization** | **String**| JWT from the IDP | [optional] [default to null]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCheckConfConfId"></a>
# **getCheckConfConfId**
> getCheckConfConfId(conf\_id, Authorization)

Your GET endpoint

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conf\_id** | **String**|  | [default to null]
 **Authorization** | **String**| Auth JWT token from Auth0 | [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getSearchConferencesSearchString"></a>
# **getSearchConferencesSearchString**
> List getSearchConferencesSearchString(search\_string, Authorization, count)

Your GET endpoint

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search\_string** | **String**|  | [default to null]
 **Authorization** | **String**| Auth JWT token from Auth0 | [default to null]
 **count** | **Integer**| limit result to number of results (-1 means all) | [optional] [default to -1]

### Return type

[**List**](../Models/partyconf.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserUserIdSearchStrings"></a>
# **getUserUserIdSearchStrings**
> List getUserUserIdSearchStrings(user\_id, Authorization)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_id** | **String**|  | [default to null]
 **Authorization** | **String**| IDP issued JWS | [optional] [default to null]

### Return type

**List**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserUserUuidInvitedToConferences"></a>
# **getUserUserUuidInvitedToConferences**
> List getUserUserUuidInvitedToConferences(user\_uuid, Authorization, from, to)

Your GET endpoint

    get invited_to_conferences conferences for a user from index - to index. If from &gt; max(invited_to_conferences), then return 204. If to &gt; max(invited_to_conferences) then from to max(invited_to_conferences)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_uuid** | **String**| User&#39;s UUID | [default to null]
 **Authorization** | **String**| Auth JWT token from Auth0 | [default to null]
 **from** | **Integer**| from index | [optional] [default to null]
 **to** | **Integer**| to index (-1) means all or max | [optional] [default to -1]

### Return type

[**List**](../Models/partyconf.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserUserUuidLastJoined"></a>
# **getUserUserUuidLastJoined**
> List getUserUserUuidLastJoined(user\_uuid, Authorization, from, to)

Your GET endpoint

    get last_joined conferences for a user from index - to index. If from &gt; max(joined), then return 204. If to &gt; max(joined) then from to max(joined)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_uuid** | **String**| User&#39;s UUID | [default to null]
 **Authorization** | **String**| Auth JWT token from Auth0 | [default to null]
 **from** | **Integer**| from index | [optional] [default to null]
 **to** | **Integer**| to index (-1 means all) | [optional] [default to -1]

### Return type

[**List**](../Models/partyconf.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getV1ConfConfIdAllUsers"></a>
# **getV1ConfConfIdAllUsers**
> inline_response_200_1 getV1ConfConfIdAllUsers(conf\_id, Authorization)

Your GET endpoint

    Get all participants and moderators of a conference with conference ID as &#x60;conf_id&#x60;.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conf\_id** | **String**|  | [default to null]
 **Authorization** | **String**| JWT from IDP | [optional] [default to null]

### Return type

[**inline_response_200_1**](../Models/inline_response_200_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getV1SayHello"></a>
# **getV1SayHello**
> getV1SayHello(Authorization, entity)

Say Hello

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Authorization** | **String**| Auth JWT token from Auth0 | [optional] [default to null]
 **entity** | [**entity**](../Models/entity.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="getV1Status"></a>
# **getV1Status**
> getV1Status()

Your GET endpoint

    readiness &amp; liveness probe

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getXB64URL"></a>
# **getXB64URL**
> getXB64URL(b64\_URL, Authorization)

Your GET endpoint

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **b64\_URL** | **String**|  | [default to null]
 **Authorization** | **String**| JWT of the auth | [optional] [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="postLogin"></a>
# **postLogin**
> inline_response_200 postLogin(Authorization, user)



    Record or register login event of a user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Authorization** | **String**| Auth JWT token from Auth0 | [optional] [default to null]
 **user** | [**user**](../Models/user.md)|  | [optional]

### Return type

[**inline_response_200**](../Models/inline_response_200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="postUserUserUuidSetFavouriteConferenceConfId"></a>
# **postUserUserUuidSetFavouriteConferenceConfId**
> postUserUserUuidSetFavouriteConferenceConfId(user\_uuid, conf\_id, Authorization)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_uuid** | **String**|  | [default to null]
 **conf\_id** | **String**|  | [default to null]
 **Authorization** | **String**| Auth JWT token from Auth0 | [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="postUserUserUuidUnsetFavouriteConferenceConfId"></a>
# **postUserUserUuidUnsetFavouriteConferenceConfId**
> postUserUserUuidUnsetFavouriteConferenceConfId(user\_uuid, conf\_id, Authorization)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_uuid** | **String**|  | [default to null]
 **conf\_id** | **String**|  | [default to null]
 **Authorization** | **String**| Auth JWT token from Auth0 | [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="postV1CheckEntryCode"></a>
# **postV1CheckEntryCode**
> postV1CheckEntryCode(inline\_object\_1)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline\_object\_1** | [**inline_object_1**](../Models/inline_object_1.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="postV1CreateConferenceConferenceName"></a>
# **postV1CreateConferenceConferenceName**
> partyconf postV1CreateConferenceConferenceName(conference\_name, Authorization, inline\_object)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conference\_name** | **String**|  | [default to null]
 **Authorization** | **String**| Auth JWT token from Auth0 | [optional] [default to null]
 **inline\_object** | [**inline_object**](../Models/inline_object.md)|  | [optional]

### Return type

[**partyconf**](../Models/partyconf.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="postV1EditConferenceConferenceName"></a>
# **postV1EditConferenceConferenceName**
> partyconf postV1EditConferenceConferenceName(conf\_id, Authorization, inline\_object\_2)



    Edit the conference &#x60;conf_id&#x60; users, provide &#x60;new_moderators&#x60;, &#x60;new_participants&#x60; and users to be removed as &#x60;remove_users&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conf\_id** | **String**|  | [default to null]
 **Authorization** | **String**| IDP issued JWS | [optional] [default to null]
 **inline\_object\_2** | [**inline_object_2**](../Models/inline_object_2.md)|  | [optional]

### Return type

[**partyconf**](../Models/partyconf.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="putUserUserIdSearchStrings"></a>
# **putUserUserIdSearchStrings**
> putUserUserIdSearchStrings(user\_id, search\_string, Authorization)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_id** | **String**|  | [default to null]
 **search\_string** | **String**|  | [default to null]
 **Authorization** | **String**| JWT from the IDP | [optional] [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="v1UserUserUuidFavouriteConferencesGet"></a>
# **v1UserUserUuidFavouriteConferencesGet**
> List v1UserUserUuidFavouriteConferencesGet(user\_uuid, Authorization)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_uuid** | **String**|  | [default to null]
 **Authorization** | **String**| Auth JWT token from Auth0 | [default to null]

### Return type

[**List**](../Models/partyconf.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

