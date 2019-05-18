import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {Parameter, ParameterInterface} from "./Parameter";

export interface QueryParameterInterface extends ParameterInterface {
    allowReserved?: boolean;

    required?: boolean;
}

/**
 * @inheritDoc
 */
export class QueryParameter extends Parameter implements QueryParameterInterface, SerializableInterface {
    public constructor(properties: QueryParameterInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986](https://tools.ietf.org/html/rfc3986#section-2.2) `:/?#[]@!$&'()*+,;=` to be included without percent-encoding. This property only applies to parameters with an `in` value of `query`. The default value is `false`.
     */
    public allowReserved: boolean;

    /**
     * @inheritDoc
     */
    public readonly in: string = "query";

    /**
     * @inheritDoc
     */
    public serialize(): { [p: string]: any } {
        const result = super.serialize();

        if (this.allowReserved !== undefined) {
            result.allowReserved = this.allowReserved;
        }

        return result;
    }
}
