export interface SerializableInterface {
    serialize(): {[key: string]: any};
}

function isSerializable(value: any): value is SerializableInterface {
    return (value as SerializableInterface).serialize !== undefined;
}

export function serialize(obj: SerializableInterface): object {
    const serializedObject = obj.serialize();

    for (const serializedObjectKey in serializedObject) {
        if (isSerializable(serializedObject[serializedObjectKey])) {
            serializedObject[serializedObjectKey] = serialize(serializedObject[serializedObjectKey]);
        }
    }

    return serializedObject;
}
