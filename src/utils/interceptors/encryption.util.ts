import {enc} from 'crypto-js';
import {encrypt, decrypt} from 'crypto-js/aes';

export class EncryptionUtil {
  constructor() { }

  public static set(key: string, value: string){
    const encrypted = encrypt(value, key);
    return encrypted.toString();
  }

  public static get(key: string, value: string){
    const decrypted = decrypt(value, key);
    return decrypted.toString(enc.Utf8);
  }

}
