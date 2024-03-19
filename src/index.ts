
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

    const test0RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test0',
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
  
    const test1RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test1',
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
  
    const test2RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test2',
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
  
    const test3RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test3',
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
  
    const test4RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test4',
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
  
    const test5RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test5',
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
  
    const test6RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test6',
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
  
    const test7RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test7',
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
  
    const test8RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test8',
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
  
    const test9RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test9',
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
  
    const test10RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test10',
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
  
    const test11RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test11',
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
  
    const test12RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test12',
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
  
    const test13RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test13',
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
  
    const test14RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test14',
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
  
    const test15RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test15',
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
  
    const test16RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test16',
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
  
    const test17RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test17',
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
  
    const test18RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test18',
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
  
    const test19RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test19',
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
  
    const test20RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test20',
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
  
    const test21RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test21',
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
  
    const test22RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test22',
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
  
    const test23RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test23',
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
  
    const test24RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test24',
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
  
    const test25RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test25',
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
  
    const test26RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test26',
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
  
    const test27RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test27',
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
  
    const test28RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test28',
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
  
    const test29RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test29',
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
  
    const test30RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test30',
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
  
    const test31RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test31',
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
  
    const test32RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test32',
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
  
    const test33RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test33',
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
  
    const test34RouteConfig = createRouteConfig({
        method: 'get',
        path: '/test34',
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

    .add(test0RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test1RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test2RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test3RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test4RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test5RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test6RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test7RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test8RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test9RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test10RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test11RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test12RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test13RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test14RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test15RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test16RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test17RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test18RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test19RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test20RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test21RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test22RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test23RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test24RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test25RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test26RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test27RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test28RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test29RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test30RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test31RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test32RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test33RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
    .add(test34RouteConfig, async (ctx) => {
        return ctx.json({
          success: true,
          data: '',
        });
      })
  
export type AppRoute = typeof route;
