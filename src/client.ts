import { hc } from 'hono/client';
import { AppRoute } from './server';

const client = hc<AppRoute>('/');
