// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiRoot: "http://localhost:8080/api/v1",
  clientId: "dependency-manager",
  clientSecret: "6e86bc96-844f-4ff4-8ea0-64ede37849c3",
  tokenUri: "http://localhost:8180/auth/realms/chris02/protocol/openid-connect/token",
  authUri: "http://localhost:8180/auth/realms/chris02/protocol/openid-connect/auth",
  logoutUri: "http://localhost:8180/auth/realms/chris02/protocol/openid-connect/logout",
  redirectUri: "http://localhost:4200"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
