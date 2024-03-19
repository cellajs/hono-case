import { Lucia, type SessionCookieOptions, TimeSpan } from 'lucia';
import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';

import { sessionsTable } from './schema/sessions';
import { type UserModel, usersTable } from './schema/users';

// Create Lucia adapter instance
const adapter = new DrizzlePostgreSQLAdapter({} as any, sessionsTable, usersTable);

const sessionCookieOptions: SessionCookieOptions = {
  name: `-session-v1`,
  expires: true,
};

export const auth = new Lucia({} as DrizzlePostgreSQLAdapter, {
  sessionExpiresIn: new TimeSpan(4, 'w'), // Set session expiration to 4 weeks
  sessionCookie: sessionCookieOptions,
  getUserAttributes({ hashedPassword, ...databaseUserAttributes }) {
    return databaseUserAttributes;
  },
});

export type Auth = typeof auth;

declare module 'lucia' {
  interface Register {
    Lucia: typeof auth;
    DatabaseUserAttributes: UserModel;
  }
}
