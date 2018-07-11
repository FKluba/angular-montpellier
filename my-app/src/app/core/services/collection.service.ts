import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  // singleton
  providedIn: 'root'
})
export class CollectionService {
  private _collection: Item[];
  // l'underscore a pour but de nous permettre d'utiliser les fonctions get & set natives
  // collection privée accessible uniquement depuis cette classe (avec accessers get & set)
  constructor() {
    this.collection = COLLECTION;
  }

  /**
   * get collection
   */
  public get collection(): Item[] {
    return this._collection;
  }

  /**
   * set collection
   */
  public set collection(col: Item[]) {
    this._collection = col;
  }
  /**
   * add item in collection
   */

  /**
   * delete item in collection
   */

  /**
   * update item in collection
   */
}
