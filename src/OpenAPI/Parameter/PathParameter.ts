import {SerializableInterface} from "../../Serializer/SerializableInterface";
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

    public serialize(): { [p: string]: any } {
        const result = super.serialize();

        return result;
    }
}
