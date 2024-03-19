import { hc } from 'hono/client';
import { AppRoute } from './index';

const client = hc<AppRoute>('/');