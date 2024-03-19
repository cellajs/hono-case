import { acceptInviteRouteConfig } from './routes';

import { CustomHono } from '../../types/common';
import oauthRoutes from './oauth';
import {
  checkEmailRouteConfig,
  resetPasswordCallbackRouteConfig,
  resetPasswordRouteConfig,
  sendVerificationEmailRouteConfig,
  signInRouteConfig,
  signOutRouteConfig,
  signUpRouteConfig,
  verifyEmailRouteConfig,
} from './routes';

const app = new CustomHono();

// * Authentication endpoints
const authRoutes = app
  /*
   * Sign up with email and password
   */
  .add(signUpRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
    });
  })
  /*
   * Verify email
   */
  .add(verifyEmailRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
    });
  })
  /*
   * Send verification email
   */
  .add(sendVerificationEmailRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
    });
  })
  /*
   * Check if email exists
   */
  .add(checkEmailRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        exists: true,
      },
    });
  })
  /*
   * Request reset password email with token
   */
  .add(resetPasswordRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: undefined,
    });
  })
  /*
   * Reset password with token
   */
  .add(resetPasswordCallbackRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: undefined,
    });
  })
  /*
   * Sign in with email and password
   */
  .add(signInRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {},
    });
  })
  /*
   * Sign out
   */
  .add(signOutRouteConfig, async (ctx) => {
    return ctx.json({ success: true, data: undefined });
  })
  /*
   * Accept invite token
   */
  .add(acceptInviteRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  });

export default authRoutes.route('/', oauthRoutes);
