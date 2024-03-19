import { CustomHono } from '../../types/common';
import {
  deleteUsersRouteConfig,
  getUserByIdOrSlugRouteConfig,
  getUserMenuConfig,
  getUsersConfig,
  meRouteConfig,
  updateUserConfig,
  userSuggestionsConfig,
} from './routes';

const app = new CustomHono();

// User endpoints
const usersRoutes = app
  /*
   * Get current user
   */
  .add(meRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        counts: {
          memberships: 0,
        },
      } as any,
    });
  })
  /*
   * Get user menu
   */
  .add(getUserMenuConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        organizations: {
          active: [],
          inactive: [],
          canCreate: true,
        },
      },
    });
  })
  /*
   * Update a user
   */
  .add(updateUserConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        counts: {
          memberships: 0,
        },
      } as any,
    });
  })
  /*
   * Get users
   */
  .add(getUsersConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        items: [],
        total: 0,
      },
    });
  })
  /*
   * Get user suggestions
   */
  .add(userSuggestionsConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: [],
    });
  })
  /*
   * Delete users
   */
  .add(deleteUsersRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      errors: [],
    });
  })
  /*
   * Get a user by id or slug
   */
  .add(getUserByIdOrSlugRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        counts: {
          memberships: 0,
        },
      } as any,
    });
  });

export default usersRoutes;
