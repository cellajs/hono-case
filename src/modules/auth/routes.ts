import { z } from '@hono/zod-openapi';

import { errorResponses, successResponseWithDataSchema, successResponseWithoutDataSchema } from '../../lib/common-responses';
import { cookieSchema } from '../../lib/common-schemas';
import { createRouteConfig } from '../../lib/route-config';
import { publicGuard } from '../../middlewares/guard';
import { apiUserSchema } from '../users/schema';
import {
  acceptInviteJsonSchema,
  checkEmailJsonSchema,
  emailExistsJsonSchema,
  resetPasswordJsonSchema,
  signInJsonSchema,
  signUpJsonSchema,
} from './schema';

export const signUpRouteConfig = createRouteConfig({
  method: 'post',
  path: '/sign-up',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Sign up a new user',
  security: [],
  request: {
    body: {
      content: {
        'application/json': {
          schema: signUpJsonSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User signed up successfully (cookie set automatically)',
      headers: z.object({
        'Set-Cookie': cookieSchema,
      }),
      content: {
        'application/json': {
          schema: successResponseWithoutDataSchema,
        },
      },
    },
    ...errorResponses,
  },
});

export const verifyEmailRouteConfig = createRouteConfig({
  method: 'get',
  path: '/verify-email/{token}',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Verify a user email address',
  security: [],
  request: {
    query: z.object({
      resend: z.string().optional(),
    }),
    params: z.object({
      token: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Email address verified',
      content: {
        'application/json': {
          schema: successResponseWithoutDataSchema,
        },
      },
    },
    ...errorResponses,
  },
});

export const sendVerificationEmailRouteConfig = createRouteConfig({
  method: 'post',
  path: '/send-verification-email',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Resend a verification email',
  security: [],
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            email: z.string(),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Verification email sent',
      content: {
        'application/json': {
          schema: successResponseWithoutDataSchema,
        },
      },
    },
    ...errorResponses,
  },
});

export const resetPasswordRouteConfig = createRouteConfig({
  method: 'post',
  path: '/reset-password',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Request a reset password email',
  security: [],
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            email: z.string(),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Password reset email sent',
      content: {
        'application/json': {
          schema: successResponseWithoutDataSchema,
        },
      },
    },
    ...errorResponses,
  },
});

export const resetPasswordCallbackRouteConfig = createRouteConfig({
  method: 'post',
  path: '/reset-password/{token}',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Submit a new password',
  security: [],
  request: {
    params: z.object({
      token: z.string(),
    }),
    body: {
      content: {
        'application/json': {
          schema: resetPasswordJsonSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Password reset successfully',
      content: {
        'application/json': {
          schema: successResponseWithoutDataSchema,
        },
      },
    },
    ...errorResponses,
  },
});

export const checkEmailRouteConfig = createRouteConfig({
  method: 'post',
  path: '/check-email',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Check if an email address exists',
  security: [],
  request: {
    body: {
      content: {
        'application/json': {
          schema: checkEmailJsonSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User email address exists or not',
      content: {
        'application/json': {
          schema: successResponseWithDataSchema(emailExistsJsonSchema),
        },
      },
    },
    ...errorResponses,
  },
});

export const signInRouteConfig = createRouteConfig({
  method: 'post',
  path: '/sign-in',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Sign in a user',
  security: [],
  request: {
    body: {
      content: {
        'application/json': {
          schema: signInJsonSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User signed in successfully (cookie set automatically)',
      headers: z.object({
        'Set-Cookie': cookieSchema,
      }),
      content: {
        'application/json': {
          schema: successResponseWithDataSchema(apiUserSchema),
        },
      },
    },
    302: {
      description: 'Email address not verified',
      headers: z.object({
        Location: z.string(),
      }),
    },
    ...errorResponses,
  },
});

export const githubSignInRouteConfig = createRouteConfig({
  method: 'get',
  path: '/sign-in/github',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Sign in a user with GitHub',
  security: [],
  request: {
    query: z.object({
      redirect: z.string().optional(),
    }),
  },
  responses: {
    302: {
      description: 'Redirect to GitHub',
      headers: z.object({
        Location: z.string(),
      }),
    },
    ...errorResponses,
  },
});

export const githubSignInCallbackRouteConfig = createRouteConfig({
  method: 'get',
  path: '/sign-in/github/callback',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Callback for GitHub sign in',
  security: [],
  request: {
    query: z.object({
      code: z.string(),
      state: z.string(),
    }),
  },
  responses: {
    302: {
      description: 'Redirect to frontend',
      headers: z.object({
        Location: z.string(),
      }),
    },
    ...errorResponses,
  },
});

export const googleSignInRouteConfig = createRouteConfig({
  method: 'get',
  path: '/sign-in/google',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Sign in a user with Google',
  security: [],
  request: {
    query: z.object({
      redirect: z.string().optional(),
    }),
  },
  responses: {
    302: {
      description: 'Redirect to Google',
      headers: z.object({
        Location: z.string(),
      }),
    },
    ...errorResponses,
  },
});

export const googleSignInCallbackRouteConfig = createRouteConfig({
  method: 'get',
  path: '/sign-in/google/callback',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Callback for Google sign in',
  security: [],
  request: {
    query: z.object({
      code: z.string(),
      state: z.string(),
    }),
  },
  responses: {
    302: {
      description: 'Redirect to frontend',
      headers: z.object({
        Location: z.string(),
      }),
    },
    ...errorResponses,
  },
});

export const microsoftSignInRouteConfig = createRouteConfig({
  method: 'get',
  path: '/sign-in/microsoft',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Sign in a user with Microsoft',
  security: [],
  request: {
    query: z.object({
      redirect: z.string().optional(),
    }),
  },
  responses: {
    302: {
      description: 'Redirect to Microsoft',
      headers: z.object({
        Location: z.string(),
      }),
    },
    ...errorResponses,
  },
});

export const microsoftSignInCallbackRouteConfig = createRouteConfig({
  method: 'get',
  path: '/sign-in/microsoft/callback',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Callback for Microsoft sign in',
  security: [],
  request: {
    query: z.object({
      code: z.string(),
      state: z.string(),
    }),
  },
  responses: {
    302: {
      description: 'Redirect to frontend',
      headers: z.object({
        Location: z.string(),
      }),
    },
    ...errorResponses,
  },
});

export const signOutRouteConfig = createRouteConfig({
  method: 'get',
  path: '/sign-out',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Sign out a user',
  responses: {
    200: {
      description: 'User signed out',
      content: {
        'application/json': {
          schema: successResponseWithoutDataSchema,
        },
      },
    },
    ...errorResponses,
  },
});

export const acceptInviteRouteConfig = createRouteConfig({
  method: 'post',
  path: '/accept-invite/{token}',
  guard: publicGuard,
  tags: ['auth'],
  summary: 'Accept invitation',
  request: {
    params: z.object({
      token: z.string(),
    }),
    body: {
      content: {
        'application/json': {
          schema: acceptInviteJsonSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Invitation was accepted',
      content: {
        'application/json': {
          schema: successResponseWithDataSchema(z.string()),
        },
      },
    },
    302: {
      description: 'Redirect to github',
      headers: z.object({
        Location: z.string(),
      }),
    },
    ...errorResponses,
  },
});
