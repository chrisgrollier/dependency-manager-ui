export const environment = {
  production: true,
  apiRoot: "/api/v1",
  clientId: "75568ed7513242edbc8d0d2f324127d7",
  clientSecret: "914663c0-8e02-40f1-a18c-27e01bef3e5e",
  tokenUri: "https://idcs-ff72d424ef424056bfc689d6a41302cb.identity.oraclecloud.com:443/oauth2/v1/token",
  authUri: "https://idcs-ff72d424ef424056bfc689d6a41302cb.identity.oraclecloud.com:443/oauth2/v1/authorize",
  logoutUri: "https://idcs-ff72d424ef424056bfc689d6a41302cb.identity.oraclecloud.com:443/oauth2/v1/userlogout",
  redirectUri: "https://132.145.60.143",
  scope: "openid%20https%3A%2F%2F132.145.60.143%2Fapi%2Fv1%2Fread%20https%3A%2F%2F132.145.60.143%2Fapi%2Fv1%2Fwrite",
  //scope: "openid",
  tokenAuthMode: "header"
};
