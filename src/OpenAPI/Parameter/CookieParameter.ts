import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {SerializerInterface} from "../../Serializer/SerializerInterface";
import {Parameter, ParameterInterface} from "./Parameter";

export interface CookieParameterInterface extends ParameterInterface {
    required?: boolean;
}

/**
 * @inheritDoc
 */
export class CookieParameter extends Parameter implements CookieParameterInterface, SerializableInterface {
    public constructor(properties: CookieParameterInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * @inheritDoc
     */
    public readonly in: string = "cookie";

    public serialize(serializer: SerializerInterface): { [p: string]: any } {
        return serializer.serialize(this);
    }
}
