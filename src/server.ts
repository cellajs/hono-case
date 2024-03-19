import middlewares from './middlewares';
import authRoutes from './modules/auth';
import generalRoutes from './modules/general';
import organizationsRoutes from './modules/organizations';
import publicRoutes from './modules/public';
import usersRoutes from './modules/users';
import { CustomHono } from './types/common';

// Set default hook to catch validation errors
export const app = new CustomHono();

// Add global middleware
app.route('', middlewares);

// Add routes for each module
const route = app.route('/', authRoutes).route('/', usersRoutes).route('/', organizationsRoutes).route('/', generalRoutes).route('/', publicRoutes);

// Export type to share API with Client (RP)
export type AppRoute = typeof route;
