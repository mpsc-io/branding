# Documentation for HooT-API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://devapi.hoot.mx*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**deleteV1ConfConfId**](Apis/DefaultApi.md#deletev1confconfid) | **DELETE** /v1/conf/{conf_id} | 
*DefaultApi* | [**getCheckConfConfId**](Apis/DefaultApi.md#getcheckconfconfid) | **GET** /v1/check_conf/{conf_id} | Your GET endpoint
*DefaultApi* | [**getSearchConferencesSearchString**](Apis/DefaultApi.md#getsearchconferencessearchstring) | **GET** /v1/search/conferences/{search_string} | Your GET endpoint
*DefaultApi* | [**getUserUserIdSearchStrings**](Apis/DefaultApi.md#getuseruseridsearchstrings) | **GET** /v1/user/{user_id}/search_strings | 
*DefaultApi* | [**getUserUserUuidInvitedToConferences**](Apis/DefaultApi.md#getuseruseruuidinvitedtoconferences) | **GET** /v1/user/{user_uuid}/invited_to_conferences | Your GET endpoint
*DefaultApi* | [**getUserUserUuidLastJoined**](Apis/DefaultApi.md#getuseruseruuidlastjoined) | **GET** /v1/user/{user_uuid}/last_joined_conferences | Your GET endpoint
*DefaultApi* | [**getV1ConfConfIdAllUsers**](Apis/DefaultApi.md#getv1confconfidallusers) | **GET** /v1/conf/{conf_id}/all_users | Your GET endpoint
*DefaultApi* | [**getV1SayHello**](Apis/DefaultApi.md#getv1sayhello) | **GET** /v1/say_hello | Say Hello
*DefaultApi* | [**getV1Status**](Apis/DefaultApi.md#getv1status) | **GET** /v1/status | Your GET endpoint
*DefaultApi* | [**getXB64URL**](Apis/DefaultApi.md#getxb64url) | **GET** /v1/x/{b64_URL} | Your GET endpoint
*DefaultApi* | [**postLogin**](Apis/DefaultApi.md#postlogin) | **POST** /v1/login | Record or register login event of a user
*DefaultApi* | [**postUserUserUuidSetFavouriteConferenceConfId**](Apis/DefaultApi.md#postuseruseruuidsetfavouriteconferenceconfid) | **POST** /v1/user/{user_uuid}/set_favourite_conference/{conf_id} | 
*DefaultApi* | [**postUserUserUuidUnsetFavouriteConferenceConfId**](Apis/DefaultApi.md#postuseruseruuidunsetfavouriteconferenceconfid) | **POST** /v1/user/{user_uuid}/unset_favourite_conference/{conf_id} | 
*DefaultApi* | [**postV1CheckEntryCode**](Apis/DefaultApi.md#postv1checkentrycode) | **POST** /v1/check_entry_code | 
*DefaultApi* | [**postV1CreateConferenceConferenceName**](Apis/DefaultApi.md#postv1createconferenceconferencename) | **POST** /v1/create_conference/{conference_name} | 
*DefaultApi* | [**postV1EditConferenceConferenceName**](Apis/DefaultApi.md#postv1editconferenceconferencename) | **POST** /v1/edit_conference/{conf_id} | Edit the conference `conf_id` users, provide `new_moderators`, `new_participants` and users to be removed as `remove_users`
*DefaultApi* | [**putUserUserIdSearchStrings**](Apis/DefaultApi.md#putuseruseridsearchstrings) | **PUT** /v1/user/{user_id}/search_strings/{search_string} | 
*DefaultApi* | [**v1UserUserUuidFavouriteConferencesGet**](Apis/DefaultApi.md#v1useruseruuidfavouriteconferencesget) | **GET** /v1/user/{user_uuid}/favourite_conferences | 


<a name="documentation-for-models"></a>
## Documentation for Models

 - [conference](./Models/conference.md)
 - [coremx](./Models/coremx.md)
 - [entity](./Models/entity.md)
 - [error](./Models/error.md)
 - [inline_object](./Models/inline_object.md)
 - [inline_object_1](./Models/inline_object_1.md)
 - [inline_object_2](./Models/inline_object_2.md)
 - [inline_response_200](./Models/inline_response_200.md)
 - [inline_response_200_1](./Models/inline_response_200_1.md)
 - [participant](./Models/participant.md)
 - [partyconf](./Models/partyconf.md)
 - [sip](./Models/sip.md)
 - [user](./Models/user.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
