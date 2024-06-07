import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class SharpService {
  public processImage(
    input?:
      | Buffer
      | ArrayBuffer
      | Uint8Array
      | Uint8ClampedArray
      | Int8Array
      | Uint16Array
      | Int16Array
      | Uint32Array
      | Int32Array
      | Float32Array
      | Float64Array
      | string,
    options?: sharp.SharpOptions,
  ): sharp.Sharp {
    return sharp(input, options);
  }
}
