import {Reference} from "./Reference";
import {Response} from "./Response";

/**
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.
 *
 * The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors.
 *
 * The `default` MAY be used as a default response object for all HTTP codes that are not covered individually by the specification.
 *
 * The `Responses Object` MUST contain at least one response code, and it SHOULD be the response for a successful operation call.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#responses-object
 */
export interface ResponsesInterface {
    /**
     * Any [HTTP status code](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#httpCodes) can be used as the property name, but only one property per code, to describe the expected response for that HTTP status code. A [Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#referenceObject) can link to a response that is defined in the [OpenAPI Object's components/responses](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsResponses) section. This field MUST be enclosed in quotation marks (for example, "200") for compatibility between JSON and YAML. To define a range of response codes, this field MAY contain the uppercase wildcard character `X`. For example, `2XX` represents all response codes between `[200-299]`. Only the following range definitions are allowed: `1XX`, `2XX`, `3XX`, `4XX`, and `5XX`. If a response is defined using an explicit code, the explicit code definition takes precedence over the range definition for that code.
     */
    [httpStatusCode: string]: Response | Reference;
}
