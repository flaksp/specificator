import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {Parameter, ParameterInterface} from "./Parameter";

export interface HeaderParameterInterface extends ParameterInterface {
    required?: boolean;
}

/**
 * @inheritDoc
 */
export class HeaderParameter extends Parameter implements HeaderParameterInterface, SerializableInterface {
    public constructor(properties: HeaderParameterInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * @inheritDoc
     */
    public readonly in: string = "header";

    /**
     * @inheritDoc
     */
    public serialize(): { [p: string]: any } {
        const result = super.serialize();

        return result;
    }
}
