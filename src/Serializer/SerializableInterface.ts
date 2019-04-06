import {SerializerInterface} from "./SerializerInterface";

export interface SerializableInterface {
    serialize(serializer: SerializerInterface): {[key: string]: any};
}
