import * as SQLite from "expo-sqlite";

function openDb() {
  const db = SQLite.openDatabase("rod_pokedex.db");
  // prepare();
  return db;
}

export const Database = openDb();

function query(query: string, callback?: SQLite.SQLStatementCallback) {
  const Database = openDb();
  return Database.transaction((tx) => {
    return tx.executeSql(
      query,
      [],
      (_, results) => {
        console.log({ query, _, results });
        // @ts-ignore
        return callback(_, results);
      },
      // @ts-ignore
      (_, errs) => {
        console.error(_, errs);
        return;
      }
    );
  });
}
function prepare() {
  const sql =
    "CREATE TABLE IF NOT EXISTS \
    `pokemon` (\
      `_id` integer not null primary key auto_increment,\
      `index` varchar(6) not null default CURRENT_TIMESTAMP,\
      `name` varchar(255) not null,\
    );";

  query(sql, () => {});
}

export function save(index: string, name: string) {
  console.log("save", { index, name });
  query(
    `INSERT INTO pokemon (index,name) VALUES('${index}','${name}')`,
    (_, results) => {
      return results;
    }
  );
}
export function remove(index: string) {
  console.log("remove", { index });
  query(`DELETE FROM pokemon WHERE index like '${index}'`, (_, results) => {
    return results;
  });
}
export function findById(index: string) {
  return query(
    `SELECT * FROM pokemon WHERE index like '${index}'`,
    (_, results) => {
      console.log("results", results);
      return results;
    }
  );
}
