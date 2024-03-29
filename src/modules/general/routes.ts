import { z } from '@hono/zod-openapi';
import { errorResponses, successResponseWithDataSchema, successResponseWithoutDataSchema } from '../../lib/common-responses';
import { createRouteConfig } from '../../lib/route-config';
import { authGuard, publicGuard, tenantGuard } from '../../middlewares/guard';
import { inviteJsonSchema } from './schema';

export const getUploadTokenRouteConfig = createRouteConfig({
  method: 'get',
  path: '/upload-token',
  guard: authGuard(),
  tags: ['general'],
  summary: 'Get upload token',
  description: 'This endpoint is used to get an upload token for a user or organization. The token can be used to upload public or private images/files to your S3 bucket using imado.',
  request: {
    query: z.object({
      public: z.string().optional().default('false'),
      organization: z.string().optional(),
      width: z.string().optional(),
      height: z.string().optional(),
      quality: z.string().optional(),
      format: z.string().optional(),
    }),
  },
  responses: {
    200: {
      description: 'Upload token with a scope for a user or organization',
      content: {
        'application/json': {
          schema: successResponseWithDataSchema(
            z.string().openapi({
              description: 'The upload token (JWT)',
            }),
          ),
        },
      },
    },
    ...errorResponses,
  },
});

export const checkSlugRouteConfig = createRouteConfig({
  method: 'get',
  path: '/check-slug/{slug}',
  guard: authGuard(),
  tags: ['general'],
  summary: 'Check if a slug is already in use',
  description: 'This endpoint is used to check if a slug is already in use. It is used for organizations and users.',
  request: {
    params: z.object({
      slug: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'User',
      content: {
        'application/json': {
          schema: successResponseWithDataSchema(z.boolean()),
        },
      },
    },
    ...errorResponses,
  },
});

export const checkTokenRouteConfig = createRouteConfig({
  method: 'get',
  path: '/check-token/{token}',
  guard: publicGuard,
  tags: ['general'],
  summary: 'Token validation check',
  description: 'This endpoint is used to check if a token is still valid. It is used for reset password and invitation tokens.',
  request: {
    params: z.object({
      token: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Email address of user',
      content: {
        'application/json': {
          schema: successResponseWithDataSchema(z.string().email()),
        },
      },
    },
    ...errorResponses,
  },
});

export const inviteRouteConfig = createRouteConfig({
  method: 'post',
  path: '/invite',
  guard: tenantGuard(['ADMIN']),
  tags: ['general'],
  summary: 'Invite a new member(user) to organization or system',
  description: `
    Permissions:
      - Users with role 'ADMIN'
      - Users, who are members of the organization and have role 'ADMIN' in the organization
  `,
  request: {
    body: {
      content: {
        'application/json': {
          schema: inviteJsonSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Invitation was sent',
      content: {
        'application/json': {
          schema: successResponseWithoutDataSchema,
        },
      },
    },
    ...errorResponses,
  },
});

export const paddleWebhookRouteConfig = createRouteConfig({
  method: 'post',
  path: '/paddle-webhook',
  guard: publicGuard,
  tags: ['general'],
  summary: 'Paddle webhook',
  description: 'Paddle webhook for subscription events',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.unknown(),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Paddle webhook received',
      content: {
        'application/json': {
          schema: successResponseWithoutDataSchema,
        },
      },
    },
    ...errorResponses,
  },
});
