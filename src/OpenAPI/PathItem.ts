import {SerializableInterface} from "../Serializer/SerializableInterface";
import {Operation} from "./Operation";
import {Parameter} from "./Parameter/Parameter";
import {Reference} from "./Reference";
import {SafeEditableInterface} from "./SafeEditableInterface";
import {Server} from "./Server";

export interface PathItemInterface {
    $ref?: string;

    delete?: Operation;

    description?: string;

    get?: Operation;

    head?: Operation;

    options?: Operation;

    parameters?: Array<Parameter | Reference>;

    patch?: Operation;

    post?: Operation;

    put?: Operation;

    servers?: Server[];

    summary?: string;

    trace?: Operation;
}

/**
 * Describes the operations available on a single path. A Path Item MAY be empty, due to [ACL constraints](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#securityFiltering). The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#path-item-object
 */
export class PathItem implements PathItemInterface, SerializableInterface, SafeEditableInterface {
    public constructor(properties: PathItemInterface) {
        Object.assign(this, properties);
    }

    /**
     * Allows for an external definition of this path item. The referenced structure MUST be in the format of a [Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathItemObject). If there are conflicts between the referenced definition and this Path Item's definition, the behavior is _undefined_.
     */
    public $ref?: string;

    /**
     * A definition of a DELETE operation on this path.
     */
    public delete?: Operation;

    /**
     * An optional, string description, intended to apply to all operations in this path. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * A definition of a GET operation on this path.
     */
    public get?: Operation;

    /**
     * A definition of a HEAD operation on this path.
     */
    public head?: Operation;

    /**
     * A definition of a OPTIONS operation on this path.
     */
    public options?: Operation;

    /**
     * A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a [name](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterName) and [location](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn). The list can use the [Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#referenceObject) to link to parameters that are defined at the [OpenAPI Object's components/parameters](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsParameters).
     */
    public parameters?: Array<Parameter | Reference>;

    /**
     * A definition of a PATCH operation on this path.
     */
    public patch?: Operation;

    /**
     * A definition of a POST operation on this path.
     */
    public post?: Operation;

    /**
     * A definition of a PUT operation on this path.
     */
    public put?: Operation;

    /**
     * An alternative `server` array to service all operations in this path.
     */
    public servers?: Server[];

    /**
     * An optional, string summary, intended to apply to all operations in this path.
     */
    public summary?: string;

    /**
     * A definition of a TRACE operation on this path.
     */
    public trace?: Operation;

    /**
     * @inheritDoc
     */
    public cloneAndEdit<T>(callback: (object: T) => void): T {
        const copy = require("deepcopy")(this);

        callback(copy);

        return copy;
    }

    /**
     * @inheritDoc
     */
    public serialize(): { [p: string]: any } {
        const result = {} as { [p: string]: any };

        if (this.$ref !== undefined) {
            result.$ref = this.$ref;
        }

        if (this.delete !== undefined) {
            result.delete = this.delete;
        }

        if (this.description !== undefined) {
            result.description = this.description;
        }

        if (this.get !== undefined) {
            result.get = this.get;
        }

        if (this.head !== undefined) {
            result.head = this.head;
        }

        if (this.options !== undefined) {
            result.options = this.options;
        }

        if (this.parameters !== undefined) {
            result.parameters = this.parameters;
        }

        if (this.patch !== undefined) {
            result.patch = this.patch;
        }

        if (this.post !== undefined) {
            result.post = this.post;
        }

        if (this.put !== undefined) {
            result.put = this.put;
        }

        if (this.servers !== undefined) {
            result.servers = this.servers;
        }

        if (this.summary !== undefined) {
            result.summary = this.summary;
        }

        if (this.trace !== undefined) {
            result.trace = this.trace;
        }

        return result;
    }
}
