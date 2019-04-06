import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {SerializerInterface} from "../../Serializer/SerializerInterface";
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

    public serialize(serializer: SerializerInterface): { [p: string]: any } {
        return serializer.serialize(this);
    }
}
