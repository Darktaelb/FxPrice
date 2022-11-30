import { Injectable } from '@angular/core';
import { ClientStorage } from '../enums/client-storage.enum';

@Injectable()
export class StorageService {
  public saveItemToStorage(
    key: string,
    value: any,
    storage: ClientStorage = ClientStorage.localStorage
  ) {
    switch (storage) {
      default: {
        localStorage.setItem(key, value);
        break;
      }
    }
  }

  public getItemFromStorage(
    key: string,
    clientStorage: ClientStorage = ClientStorage.localStorage
  ) {
    switch (clientStorage) {
      default: {
        return localStorage.getItem(key);
      }
    }
  }

  public removeItemFromStorage(
    key: string,
    clientStorage: ClientStorage = ClientStorage.localStorage
  ) {
    switch (clientStorage) {
      default: {
        localStorage.removeItem(key);
      }
    }
  }
}
