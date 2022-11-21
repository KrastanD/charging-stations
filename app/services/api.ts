import { Result } from "./ChargersList.types";

const defaultConfig = {
  ocmUrl: "https://api.openchargemap.io/v3",
  eveUrl: "https://example.ev.energy",
};

export class Api {
  ocmUrl: string;
  eveUrl: string;
  constructor(config = defaultConfig) {
    this.ocmUrl = config.ocmUrl;
    this.eveUrl = config.eveUrl;
  }

  public async fetchListOfChargers(location: {
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
        `${this.ocmUrl}/poi?key=123&boundingbox=(${boundingBox.lat1},${boundingBox.long1}),(${boundingBox.lat2},${boundingBox.long2})`
      ).then((response) => response.json());
    } catch (e) {
      return [null, Error(e)];
    }
    return [resp as Result[], null];
  }

  public async updateChargerBeingUsed(
    chargerId: number
  ): Promise<Error | null> {
    const requestBody = {
      user: 1,
      car_id: 1,
      charger_id: chargerId,
    };
    try {
      await fetch(`${this.eveUrl}/chargingsession`, {
        method: "POST",
        body: JSON.stringify(requestBody),
      });
    } catch (e) {
      return Error(e);
    }
    return null;
  }
}
export const api = new Api();
