import { DatabaseConnection } from './connection';

export class Database {
  public db: any = null;
  constructor() {
    this.db = DatabaseConnection.getConnection();
    this.db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
      console.log('Foreign keys turned on'),
    );
    this.InitDb();
  }
  private InitDb() {
    let sql = [
      'CREATE TABLE IF NOT EXISTS \
        `pokemon` (\
          `_id` INTEGER not null primary key autoincrement,\
          `index` INTEGER not null default CURRENT_TIMESTAMP,\
          `name` varchar(255) not null,\
          `img_url` varchar(255) not null,\
          `types` varchar(255) not null\
        );',
    ];

    this.db.transaction(
      (tx: { executeSql: (arg0: string) => void }) => {
        for (var i = 0; i < sql.length; i++) {
          tx.executeSql(sql[i]);
        }
      },
      (error: any) => {
        console.log('\nerror call back : ' + JSON.stringify(error));
        console.error(error);
      },
      () => {
        console.log('transaction complete call back ');
      },
    );
  }
}
