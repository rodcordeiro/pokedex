import { DatabaseConnection } from './connection';

/**
 * Ensures the local SQLite schema exists.
 * Call once during app bootstrap (async SQLite API, Expo SDK 50+).
 */
export async function initDatabase(): Promise<void> {
  const db = await DatabaseConnection.getConnection();
  await db.execAsync('PRAGMA foreign_keys = ON;');
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS pokemon (
      _id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      \`index\` INTEGER NOT NULL,
      name varchar(255) NOT NULL,
      img_url varchar(255) NOT NULL,
      types varchar(255) NOT NULL DEFAULT ''
    );
  `);
}

/** @deprecated Prefer initDatabase() */
export class Database {
  public async init(): Promise<void> {
    await initDatabase();
  }
}
