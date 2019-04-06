import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {SerializerInterface} from "../../Serializer/SerializerInterface";
import {OAuthFlows} from "../OAuthFlows";
import {SecurityScheme, SecuritySchemeInterface} from "./SecurityScheme";

export interface OAuth2SecuritySchemeInterface extends SecuritySchemeInterface {
    flows: OAuthFlows;
}

/**
 * @inheritDoc
 */
export class OAuth2SecurityScheme extends SecurityScheme implements OAuth2SecuritySchemeInterface, SerializableInterface {

    constructor(properties: OAuth2SecuritySchemeInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * **REQUIRED**. An object containing configuration information for the flow types supported.
     */
    public flows: OAuthFlows;

    /**
     * @inheritDoc
     */
    public readonly type: string = "oauth2";

    public serialize(serializer: SerializerInterface): { [p: string]: any } {
        return serializer.serialize(this);
    }
}
