import type { MiddlewareHandler } from 'hono';
import type { User } from 'lucia';

const auth =
  (accessibleFor?: User['role'][]): MiddlewareHandler =>
    async (ctx, next) => {
      await next();
    };

export default auth;
