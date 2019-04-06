import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {SerializerInterface} from "../../Serializer/SerializerInterface";
import {Parameter, ParameterInterface} from "./Parameter";

/**
 * @inheritDoc
 */
export interface PathParameterInterface extends ParameterInterface {
}

/**
 * @inheritDoc
 */
export class PathParameter extends Parameter implements PathParameterInterface, SerializableInterface {
    public constructor(properties: PathParameterInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * @inheritDoc
     */
    public readonly in: string = "path";

    /**
     * @inheritDoc
     */
    public readonly required: boolean = true;

    public serialize(serializer: SerializerInterface): { [p: string]: any } {
        return serializer.serialize(this);
    }
}
