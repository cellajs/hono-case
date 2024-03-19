import type { Hook } from '@hono/zod-openapi';
import { ZodError } from 'zod';
import type { Env } from '../types/common';

const defaultHook: Hook<unknown, Env, '', unknown> = (result, ctx) => {
  if (!result.success && result.error instanceof ZodError) {
    return ctx.json({ success: false, error: result.error.issues[0].message }, 400);
  }
};

export default defaultHook;
