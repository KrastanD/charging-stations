import { Result } from "./ChargersList.types";

const defaultConfig = {
  url: "https://api.openchargemap.io/v3",
};

export class Api {
  url: string;
  constructor(config = defaultConfig) {
    this.url = config.url;
  }

  public async getListOfChargers(location: {
    latitude: number;
    longitude: number;
  }): Promise<[Result[] | null, Error | null]> {
    const boundingBox = {
      lat1: location.latitude * 1.001,
      long1: location.longitude * 1.001,
      lat2: location.latitude * 0.999,
      long2: location.longitude * 0.999,
    };
    let resp;
    try {
      resp = await fetch(
        `${this.url}/poi?key=123&boundingbox=(${boundingBox.lat1},${boundingBox.long1}),(${boundingBox.lat2},${boundingBox.long2})`
      ).then((response) => response.json());
    } catch (e) {
      return [null, Error(e)];
    }
    return [resp as Result[], null];
  }
}
export const api = new Api();
