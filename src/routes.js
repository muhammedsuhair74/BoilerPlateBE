const signup = require('./signup/signup');
const login = require('./login/login');
const express = require('express');
const verify = require('./veriftToken');
const getUser = require('./userFetch/getUsers');

const routes = express.Router();

routes.post('/login', login);
routes.post('/signup', signup);
routes.get('/users', verify, getUser);
routes.get('/api/v1/idp_login', (req, res) => {
  console.log('got')
  res.send({"errors": [], "error_reason": null, "false": false, "success_slo": false, "paint_logout": true, "attributes": {"http://schemas.microsoft.com/identity/claims/tenantid": ["2098a516-eaf5-4026-b7ef-cf30e1697d41"], "http://schemas.microsoft.com/identity/claims/objectidentifier": ["c4993211-3a45-4d5d-a0f1-8f415bf2274e"], "http://schemas.microsoft.com/identity/claims/displayname": ["Dhyan R S"], "http://schemas.microsoft.com/identity/claims/identityprovider": ["https://sts.windows.net/2098a516-eaf5-4026-b7ef-cf30e1697d41/"], "http://schemas.microsoft.com/claims/authnmethodsreferences": ["urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport"], "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": ["dhyan@madstreetden.com"], "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": ["dhyan@madstreetden.com"]}, "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6WyJkaHlhbkBtYWRzdHJlZXRkZW4uY29tIl0sImV4cCI6MTY2MTM0NDIxMH0.BbAOkdqvQFuWDbfa682p81c-Vz9hW9TCFWp9XVvrx1E"});
})

module.exports = routes;