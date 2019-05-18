import {SerializableInterface} from "../../Serializer/SerializableInterface";
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

    /**
     * @inheritDoc
     */
    public serialize(): { [p: string]: any } {
        const result = super.serialize();

        return result;
    }
}
