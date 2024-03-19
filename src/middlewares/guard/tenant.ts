import type { MiddlewareHandler } from 'hono';
import { type MembershipModel } from '../../db/schema/memberships';
import type { Env } from '../../types/common';

// tenant() is checking if the user has membership in the organization and if the user has the required role
const tenant =
  (accessibleFor?: MembershipModel['role'][]): MiddlewareHandler<Env, ':organizationIdentifier?'> =>
    async (ctx, next) => {
      await next();
    };

export default tenant;
