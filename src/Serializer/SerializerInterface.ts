import {SerializableInterface} from "./SerializableInterface";

export interface SerializerInterface {
    serialize(obj: SerializableInterface): object;
}
