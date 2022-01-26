// Appery.io models
export interface $aio_empty_object {};
//
export interface Users_logout_serviceResponse {}
//
interface __Users_me_serviceResponse_sub_001 {}
export interface Users_me_serviceResponse {
    "acl": __Users_me_serviceResponse_sub_001,
    "FirstName": string,
    "LastName": string,
    "_id": string,
    "_createdAt": string,
    "_updatedAt": string,
    "username": string
}
//
export interface Users_login_serviceResponse {
    "_id": string,
    "sessionToken": string
}
//
export interface BarcodeScannerServiceResponse {
    "cancelled": boolean,
    "text": string,
    "format": string
}