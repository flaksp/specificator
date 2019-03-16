/**
 * Lists the required security schemes to execute this operation.
 * The name used for each property MUST correspond to a security scheme declared in the [Security Schemes](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsSecuritySchemes) under the [Components Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsObject).
 *
 * Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized.
 * This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information.
 *
 * When a list of Security Requirement Objects is defined on the [OpenAPI Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oasObject) or [Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#operationObject), only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#security-requirement-object
 */
export interface SecurityRequirementInterface {
    /**
     * Each name MUST correspond to a security scheme which is declared in the [Security Schemes](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsSecuritySchemes) under the [Components Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsObject). If the security scheme is of type `"oauth2"` or `"openIdConnect"`, then the value is a list of scope names required for the execution. For other security scheme types, the array MUST be empty.
     */
    [name: string]: string[];
}
