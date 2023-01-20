import * as SQLite from "expo-sqlite";

export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase("database.db"),
};



// https://medium.com/@thekingoftech/como-configurar-o-sqlite-expo-no-react-native-1d160e04b652

function openDb() {
  const db = SQLite.openDatabase("rod_pokedex.db");
  prepare();
  return db;
}

export const Database = openDb();

export function query(query: string, callback?: SQLite.SQLStatementCallback) {
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

// import Realm from "realm";
// export default class Database {
//   private path: string = "@rod::pokedex";
//   private cursor = new Realm({
//     path: this.path,
//     schema: [
//       {
//         name: "pokemons",
//         properties: {
//           _id: { type: "objectId", default: () => new Realm.BSON.ObjectId() },
//           index: "int",
//           name: "string",
//           image: "string?",
//         },
//       },
//     ],
//     schemaVersion: 1.0,
//     deleteRealmIfMigrationNeeded: true,
//   });

//   save(pokemon: { index: number; name: string; image?: string }) {
//     return this.cursor.write(() => {
//       // @ts-ignore
//       return this.cursor.create("pokemons", pokemon, "modified");
//     });
//   }

//   findByIndex(index: number) {
//     const pokemons = this.cursor
//       .objects("pokemons")
//       .filtered(`index == ${index}`);
//   }

//   remove(index: number) {
//     const pokemons = this.cursor
//       .objects("pokemons")
//       .filtered(`index == ${index}`);
//     return this.cursor.write(() => this.cursor.delete(pokemons));
//   }

//   clearDatabase() {
//     console.log("Cleaning database");
//     this.cursor.write(() => {
//       this.cursor.deleteAll();
//     });
//   }
// }
