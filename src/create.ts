import { appendFileSync, readFileSync, writeFileSync } from 'fs'

let code = `
import middlewares from './middlewares';
import { acceptInviteRouteConfig, checkEmailRouteConfig, resetPasswordCallbackRouteConfig, resetPasswordRouteConfig, sendVerificationEmailRouteConfig, signInRouteConfig, signOutRouteConfig, signUpRouteConfig, verifyEmailRouteConfig } from './modules/auth/routes';
import { checkSlugRouteConfig, checkTokenRouteConfig, getUploadTokenRouteConfig, inviteRouteConfig, paddleWebhookRouteConfig } from './modules/general/routes';
import { createOrganizationRouteConfig, deleteOrganizationsRouteConfig, deleteUsersFromOrganizationRouteConfig, getOrganizationByIdOrSlugRouteConfig, getOrganizationsRouteConfig, getUsersByOrganizationIdRouteConfig, updateOrganizationRouteConfig, updateUserInOrganizationRouteConfig } from './modules/organizations/routes';
import { getPublicCountsRouteConfig } from './modules/public/routes';
import { deleteUsersRouteConfig, getUserByIdOrSlugRouteConfig, getUserMenuConfig, getUsersConfig, meRouteConfig, updateUserConfig, userSuggestionsConfig } from './modules/users/routes';
import { CustomHono } from './types/common';
import { createRouteConfig } from './lib/route-config';
import { systemGuard } from './middlewares/guard';
import { z } from '@hono/zod-openapi';
import {
    errorResponses,
    successResponseWithDataSchema,
  } from './lib/common-responses';
`;

for (let i = 0; i < 35; i++) {
    code += `
    const test${i}RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test${i}',
        guard: systemGuard,
        tags: ['organizations'],
        summary: 'Test',
        description: 'Test',
        responses: {
          200: {
            description: 'Test',
            content: {
              'application/json': {
                schema: successResponseWithDataSchema(z.string()),
              },
            },
          },
          ...errorResponses,
        },
      })
  `
}

code += `
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
`

for (let i = 0; i < 35; i++) {
    code += `
    .add(test${i}RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  `
}

code += `
export type AppRoute = typeof route;
`
// const file = readFileSync('./src/server.ts', 'utf-8');
writeFileSync('./src/index.ts', code)
