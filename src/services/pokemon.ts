import { FavPokemon } from "../models/pokemon";
import { DatabaseConnection } from "../database/connection";

const table = "pokemon";
const db = DatabaseConnection.getConnection();

export class PokemonService {
  addData(param: FavPokemon) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into \`${table}\`('index','name') 
                values (${param.index},'${param.name}')`,
            [],
            (_, { insertId, rows }) => {
              console.log("id insert: " + insertId);
              resolve(insertId);
            }
          ),
            (sqlError: any) => {
              console.error(sqlError);
            };
        },
        (txError) => {
          console.error(txError);
        }
      )
    );
  }

  deleteById(index: number) {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "delete from `pokemon` where `index` = ?;",
          [index],
          (_, { rows }) => {}
        ),
          (sqlError: any) => {
            console.log(sqlError);
          };
      },
      (txError) => {
        console.log(txError);
      }
    );
  }

  //   static updateById(param: Animal) {
  //     return new Promise((resolve, reject) =>
  //       db.transaction(
  //         (tx) => {
  //           tx.executeSql(
  //             `update ${table} set nome = ? where id = ?;`,
  //             [param.nome, param.id],
  //             () => {}
  //           ),
  //             (sqlError) => {
  //               console.log(sqlError);
  //             };
  //         },
  //         (txError) => {
  //           console.log(txError);
  //         }
  //       )
  //     );
  //   }

  findById(index: number) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select * from \`pokemon\` where \`index\` = ${index}`,
            [],
            (_, { rows }) => {
              resolve(rows);
            }
          ),
            (sqlError: any) => {
              console.error(sqlError);
            };
        },
        (txError) => {
          console.error(txError);
        }
      )
    );
  }

  findAll() {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
            resolve(rows);
          }),
            (sqlError: any) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }
}
