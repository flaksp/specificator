import {SerializableInterface} from "../../Serializer/Serializer";
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

    public serialize(): { [p: string]: any } {
        return this;
    }
}
