import { FavPokemon } from '../models/pokemon';
import { DatabaseConnection } from '../database/connection';

const table = 'pokemon';

export class PokemonService {
  async addData(param: FavPokemon) {
    const db = await DatabaseConnection.getConnection();
    const result = await db.runAsync(
      `INSERT INTO \`${table}\` (\`index\`, name, img_url) VALUES (?, ?, ?)`,
      param.index,
      param.name,
      param.img_url,
    );
    return result.lastInsertRowId;
  }

  async deleteById(index: number) {
    const db = await DatabaseConnection.getConnection();
    await db.runAsync('DELETE FROM `pokemon` WHERE `index` = ?;', index);
  }

  async findById(index: number): Promise<FavPokemon[]> {
    const db = await DatabaseConnection.getConnection();
    return db.getAllAsync<FavPokemon>(
      'SELECT * FROM `pokemon` WHERE `index` = ?',
      index,
    );
  }

  async findAll(): Promise<FavPokemon[]> {
    const db = await DatabaseConnection.getConnection();
    return db.getAllAsync<FavPokemon>(`SELECT * FROM ${table}`);
  }

  async deleteAll() {
    const db = await DatabaseConnection.getConnection();
    await db.runAsync(`DELETE FROM ${table}`);
  }
}
