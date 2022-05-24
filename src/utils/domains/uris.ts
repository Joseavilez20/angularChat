// Endpoint principal
export const API_URI = 'https://djangoapichatbot.herokuapp.com';

//Public routes
export const API_LOGIN = API_URI + '/api/v1/accounts/login/';
export const API_LOGOUT = API_URI + '/api/v1/accounts/logout/';
export const API_SIGNUP = API_URI + '/api/v1/accounts/signup/';

// Private routes
export const API_ACTIVATION = API_URI + '/api/v1/accounts/activation/';
export const API_TEACHERS_BY_SCHOOL = API_URI + '/api/v1/schools/2/teachers/';
export const API_USER_PROFILE = API_URI + '/api/v1/users/profile/';

export const API_HOME_CONTENTS = API_URI + '/api/v1/schools/{school_id}/contents/';
export const API_CONTENT_COMMENTS = API_URI + '/api/v1/schools/{school_id}/contents/{content_id}/comments/';
export const API_USER_LIKES = API_URI + '/api/v1/likes/';