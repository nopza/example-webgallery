//MyPage
export const MYLOGIN_FETCHING = "MYLOGIN_FETCHING";
export const MYLOGIN_SUCCESS = "MYLOGIN_SUCCESS";
export const MYLOGIN_FAILED = "MYLOGIN_FAILED";

//Gallery Create Page
export const GALLERY_FETCHING = "GALLERY_FETCHING";
export const GALLERY_SUCCESS = "GALLERY_SUCCESS";
export const GALLERY_FAILED = "GALLERY_FAILED";
export const GALLERY_CLEAR = "GALLERY_CLEAR";

//GALLERY GETLIST
export const GALLERY_GETLIST_FETCHING = "GALLERY_GETLIST_FETCHING";
export const GALLERY_GETLIST_SUCCESS = "GALLERY_GETLIST_SUCCESS";
export const GALLERY_GETLIST_FAILED = "GALLERY_GETLIST_FAILED";

//GALLERY GETLIST
export const GALLERY_DELETE_FETCHING = "GALLERY_DELETE_FETCHING";
export const GALLERY_DELETE_SUCCESS = "GALLERY_DELETE_SUCCESS";
export const GALLERY_DELETE_FAILED = "GALLERY_DELETE_FAILED";

// MyRegister Page
export const MYREGISTER_FETCHING = "MYREGISTER_FETCHING";
export const MYREGISTER_SUCCESS = "MYREGISTER_SUCCESS";
export const MYREGISTER_FAILED = "MYREGISTER_FAILED";

export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

// Register Page
export const REGISTER_FETCHING = "REGISTER_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

// Stock Page
export const STOCK_FETCHING = "STOCK_FETCHING";
export const STOCK_SUCCESS = "STOCK_SUCCESS";
export const STOCK_FAILED = "STOCK_FAILED";
export const STOCK_CLEAR = "STOCK_CLEAR";

// Stock Edit Page
export const STOCK_EDIT_FETCHING = "STOCK_EDIT_FETCHING";
export const STOCK_EDIT_SUCCESS = "STOCK_EDIT_SUCCESS";
export const STOCK_EDIT_FAILED = "STOCK_EDIT_FAILED";
export const STOCK_EDIT_INITIALED = "STOCK_EDIT_INITIALED";

// Transaction Edit Page
export const TRANSACTION_FETCHING = "TRANSACTION_FETCHING";
export const TRANSACTION_SUCCESS = "TRANSACTION_SUCCESS";
export const TRANSACTION_FAILED = "TRANSACTION_FAILED";

// Shop Page
export const SHOP_FETCHING = "SHOP_FETCHING";
export const SHOP_SUCCESS = "SHOP_SUCCESS";
export const SHOP_FAILED = "SHOP_FAILED";

export const SHOP_UPDATE_ORDER = "SHOP_UPDATE_ORDER";
export const SHOP_UPDATE_PAYMENT = "SHOP_UPDATE_PAYMENT";

// Error Code
export const E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR =
  "E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR";
export const E_PERMISSION_MISSING = "E_PERMISSION_MISSING";
export const E_PICKER_NO_CAMERA_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION";
export const E_USER_CANCELLED = "E_USER_CANCELLED";
export const E_UNKNOWN = "E_UNKNOWN";
export const E_DEVELOPER_ERROR = "E_DEVELOPER_ERROR";
export const TIMEOUT_NETWORK = "ECONNABORTED"; // request service timeout
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";

export const apiUrl = "http://localhost:8081/api/v2";
export const imageUrl = "http://localhost:8081";

export const server = {
  LOGIN_URL: `login`,
  REFRESH_TOKEN_URL: `refresh/token`,
  REGISTER_URL: `register`,
  PRODUCT_URL: `product`,
  TRANSACTION_URL: `transaction`,
  REPORT_URL: `report`,
  TOKEN_KEY: `token`,
  REFRESH_TOKEN_KEY: `refresh_token`,
  GALLERY_URL: `gallery`,
};
