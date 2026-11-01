import * as SQLite from 'expo-sqlite';

let dbPromise: Promise<SQLite.SQLiteDatabase> | null = null;

export const DatabaseConnection = {
  getConnection: () => {
    if (!dbPromise) {
      dbPromise = SQLite.openDatabaseAsync('database.db');
    }
    return dbPromise;
  },
};
