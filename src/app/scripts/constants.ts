export const constants = {
    /**
     * Users_settings
     * @property database_id       - 
     */
    Users_settings: {
        "database_id": "61ef20340f0d313b54b04a56"
    },
    /**
     * Settings
     */
    Settings: {}
};
export const routes = {
    "Home": "home/:id",
    "Profile": "profile",
    "Info": "info",
    "Login": "login",
    "Product_Scanner": "product_scanner",
    "Inventory": "inventory",
};
export const pushSettings = {
    appID: '7bbdb6fb-0d7b-4a7e-ae2a-c932a2af2d0c',
    baseUrl: 'https://api.appery.io/rest/push/reg',
    initOptions: {}
};
export const IGNORED_VALUE = Symbol.for("AIO_REST_IGNORED_VALUE");