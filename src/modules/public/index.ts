import { CustomHono } from '../../types/common';
import { getPublicCountsRouteConfig } from './routes';

const app = new CustomHono();

// Public endpoints
const publicRoutes = app
  /*
   * Get public counts
   */
  .add(getPublicCountsRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        organizations: 0,
        users: 0,
      },
    });
  });

export default publicRoutes;
