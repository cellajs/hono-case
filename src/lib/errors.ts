import type { z } from 'zod';
import type { errorSchema } from './common-schemas';

export type HttpStatus = 400 | 401 | 403 | 404 | 409 | 429 | 500;

export type Severity = 'debug' | 'info' | 'log' | 'warn' | 'error';

export type ErrorType = z.infer<typeof errorSchema> & {
  eventData?: EventData;
  name?: Error['name'];
};

export type EventData = {
  readonly [key: string]: number | string | boolean;
};
