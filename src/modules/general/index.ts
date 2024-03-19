import { CustomHono } from '../../types/common';
import { checkSlugRouteConfig, checkTokenRouteConfig, getUploadTokenRouteConfig, inviteRouteConfig, paddleWebhookRouteConfig } from './routes';

const app = new CustomHono();

// * General endpoints
const generalRoutes = app
  /*
   * Get upload token
   */
  .add(getUploadTokenRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
   * Check slug
   */
  .add(checkSlugRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: true,
    });
  })
  /*
   * Check token (token validation)
   */
  .add(checkTokenRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
   * Invite users to the system or members to an organization
   */
  .add(inviteRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: undefined,
    });
  })
  /*
   * Paddle webhook
   */
  .add(paddleWebhookRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: undefined,
    });
  });

export default generalRoutes;
