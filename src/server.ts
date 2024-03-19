import middlewares from './middlewares';
import { acceptInviteRouteConfig, checkEmailRouteConfig, resetPasswordCallbackRouteConfig, resetPasswordRouteConfig, sendVerificationEmailRouteConfig, signInRouteConfig, signOutRouteConfig, signUpRouteConfig, verifyEmailRouteConfig } from './modules/auth/routes';
import { checkSlugRouteConfig, checkTokenRouteConfig, getUploadTokenRouteConfig, inviteRouteConfig, paddleWebhookRouteConfig } from './modules/general/routes';
import { createOrganizationRouteConfig, deleteOrganizationsRouteConfig, deleteUsersFromOrganizationRouteConfig, getOrganizationByIdOrSlugRouteConfig, getOrganizationsRouteConfig, getUsersByOrganizationIdRouteConfig, test10RouteConfig, test1RouteConfig, test2RouteConfig, test3RouteConfig, test4RouteConfig, test5RouteConfig, test6RouteConfig, test7RouteConfig, test8RouteConfig, test9RouteConfig, updateOrganizationRouteConfig, updateUserInOrganizationRouteConfig } from './modules/organizations/routes';
import { getPublicCountsRouteConfig } from './modules/public/routes';
import { deleteUsersRouteConfig, getUserByIdOrSlugRouteConfig, getUserMenuConfig, getUsersConfig, meRouteConfig, updateUserConfig, userSuggestionsConfig } from './modules/users/routes';
import { CustomHono } from './types/common';

// Set default hook to catch validation errors
export const app = new CustomHono();

// Add global middleware
app.route('', middlewares);

// Add routes for each module
const route = app
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
  })
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
  })
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
  })
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
  })
  /*
   * Test 1 route
   */
  .add(test1RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
 * Test 2 route
 */
  .add(test2RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
 * Test 3 route
 */
  .add(test3RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
 * Test 4 route
 */
  .add(test4RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
 * Test 5 route
 */
  .add(test5RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
* Test 6 route
*/
  .add(test6RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
* Test 7 route
*/
  .add(test7RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
* Test 8 route
*/
  .add(test8RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
* Test 9 route
*/
  .add(test9RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  })
  /*
* Test 10 route
*/
  .add(test10RouteConfig, async (ctx) => {
    return ctx.json({
      success: true,
      data: '',
    });
  });

// Export type to share API with Client (RP)
export type AppRoute = typeof route;
