import { CustomHono } from '../../types/common';
import {
  createOrganizationRouteConfig,
  deleteOrganizationsRouteConfig,
  deleteUsersFromOrganizationRouteConfig,
  getOrganizationByIdOrSlugRouteConfig,
  getOrganizationsRouteConfig,
  getUsersByOrganizationIdRouteConfig,
  test1RouteConfig,
  updateOrganizationRouteConfig,
  updateUserInOrganizationRouteConfig,
} from './routes';

const app = new CustomHono();

// * Organization endpoints
const organizationsRoutes = app
  /*
   * Create organization
   */
  .add(createOrganizationRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        userRole: null,
        counts: {
          admins: 0,
          members: 0,
        },
      } as any,
    });
  })
  /*
   * Get an organization
   */
  .add(getOrganizationsRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        items: [],
        total: 0,
      },
    });
  })
  /*
   * Update an organization
   */
  .add(updateOrganizationRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        userRole: null,
        counts: {
          admins: 0,
          members: 0,
        },
      } as any,
    });
  })
  /*
   * Update user in organization
   */
  .add(updateUserInOrganizationRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        organizationRole: '',
        counts: {
          memberships: 0,
        },
      } as any,
    });
  })
  /*
   * Delete organizations
   */
  .add(deleteOrganizationsRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      errors: [],
    });
  })
  /*
   * Get organization by id or slug
   */
  .add(getOrganizationByIdOrSlugRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        userRole: null,
        counts: {
          admins: 0,
          members: 0,
        },
      } as any,
    });
  })
  /*
   * Get users by organization id
   */
  .add(getUsersByOrganizationIdRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: {
        items: [],
        total: 0,
      },
    });
  })
  /*
   * Delete users from organization
   */
  .add(deleteUsersFromOrganizationRouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: undefined,
    });
  })

  // * Test endpoint

  .add(test1RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  });

export default organizationsRoutes;
