function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

// General Messages
define("REQUEST_SUCCESSFUL", "Request successful.");
define("INVALID_PASSWORD", "Invalid password.");
define("LOGIN_SUCCESS", "You are successfully logged in.");
define("WENT_WRONG", "Something went wrong!");
define("EMAIL_RECEIVED_SHORTLY", "You will receive an email shortly.");
define("MISSING_PARAMETER", "Missing Parameter.");
define("MISSING_PAGE_NUMBER", "Missing Page Number.");
define("AUTHENTICATION_FAILED", "Authentication Failed!");
define("PERMISSION_DENIED", "You don't have permission for this operation!");
define("ALREADY_EXIST", "Already exist!");
define("NO_REQUEST_FOUND", "Sorry, but you dont have any friend request from this user");
define("INVALID_TOKEN", "Your token is invalid");


// User Messages
define("USER_NOT_EXIST", "User does not exist.");
define("USER_ADDED_SUCCESS", "User was added successfully.");
define("EMAIL_EXIST", "Oops - email already exists.");
define("EMAIL_NOT_EXIST", "Email does not exist.");
define("DUPLICATE_USERNAME_EMAIL", "Duplicate Username or Emails");
define("INVALID_REQUEST", "Your request cannot proceed");


// Image Messages
define("IMAGE_UPDATE_SUCCESS", "Image was updated successfully.");
define("IMAGE_UPLOAD_SUCCESS", "Image was uploaded successfully.");
define("IMAGE_REMOVED_SUCCESS", "Image was removed successfully.");


// Email Subjects
define("REGISTER_SUCCESS", "Registration Successful!");
define("RESET_PASSWORD", "Reset Password!");


define("GAME_EXIST", "Game already exist");
define("GAME_DOESNOT_EXIST", "Game doesn't exists");
define("TOURNAMENT_DOES_NOT_EXISTS", "Tournament does not exist");
define("TOURNAMENT_ALREADY_STARTED", "The Tournament has already started,You can't join now");
define("TEAM_DOESNOT_EXIST", "Team doesn't exists");
define("LADDER_DOESNOT_EXIST", "Ladder doesn't exists");