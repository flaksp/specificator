import {SerializableInterface} from "./SerializableInterface";

export interface SerializerInterface {
    serialize(openApiObject: SerializableInterface): object;
}
