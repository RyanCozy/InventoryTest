/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "String": {
        "type": "string"
    },
    "Number": {
        "type": "number"
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Boolean": {
        "type": "boolean"
    },
    "Observable": {
        "type": "Observable"
    },
    "Users_logout_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/logout"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{Users_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "Users_me_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/users/me"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{Users_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "acl": {
                                        "type": "object",
                                        "properties": {}
                                    },
                                    "FirstName": {
                                        "type": "string"
                                    },
                                    "LastName": {
                                        "type": "string"
                                    },
                                    "_id": {
                                        "type": "string"
                                    },
                                    "_createdAt": {
                                        "type": "string"
                                    },
                                    "_updatedAt": {
                                        "type": "string"
                                    },
                                    "username": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "Users_login_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/login"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "username": {
                                "type": "string"
                            },
                            "password": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{Users_settings.database_id}"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string",
                                "default": "61ef20870f0d313b54b04a59"
                            },
                            "sessionToken": {
                                "type": "string",
                                "default": "d5581c25-c228-4912-a479-ebc25ec43bdb"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "BarcodeScannerService": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "showFlipCameraButton": {
                                "type": "boolean",
                                "default": null
                            },
                            "prompt": {
                                "type": "string"
                            },
                            "torchOn": {
                                "type": "boolean",
                                "default": null
                            },
                            "formats": {
                                "type": "string"
                            },
                            "resultDisplayDuration": {
                                "type": "number",
                                "default": null
                            },
                            "disableSuccessBeep": {
                                "type": "boolean",
                                "default": null
                            },
                            "orientation": {
                                "type": "string",
                                "default": "none"
                            },
                            "showTorchButton": {
                                "type": "boolean",
                                "default": null
                            },
                            "preferFrontCamera": {
                                "type": "boolean",
                                "default": null
                            },
                            "disableAnimations": {
                                "type": "boolean",
                                "default": null
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "cancelled": {
                                "type": "boolean",
                                "default": null
                            },
                            "text": {
                                "type": "string"
                            },
                            "format": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */