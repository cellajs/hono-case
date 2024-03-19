import { CustomHono } from '../../types/common';
import {
  githubSignInCallbackRouteConfig,
  githubSignInRouteConfig,
  googleSignInCallbackRouteConfig,
  googleSignInRouteConfig,
  microsoftSignInCallbackRouteConfig,
  microsoftSignInRouteConfig,
} from './routes';

const app = new CustomHono();

// * Oauth endpoints
const oauthRoutes = app
  /*
   * Github sign in
   */
  .add(githubSignInRouteConfig, async (ctx) => {
    return ctx.redirect('');
  })
  /*
   * Google sign in
   */
  .add(googleSignInRouteConfig, async (ctx) => {
    return ctx.json({}, 302, {
      Location: '',
    });
  })
  .add(microsoftSignInRouteConfig, async (ctx) => {
    return ctx.json({}, 302, {
      Location: '',
    });
  })
  .add(githubSignInCallbackRouteConfig, async (ctx) => {
    return ctx.json({});
  })
  .add(googleSignInCallbackRouteConfig, async (ctx) => {
    return ctx.json({});
  })

  .add(microsoftSignInCallbackRouteConfig, async (ctx) => {
    return ctx.json({});
  });

export default oauthRoutes;
