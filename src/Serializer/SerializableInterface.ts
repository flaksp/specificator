/**
 * Classes that implement this interface marked as "serializable" - that means you may serialize an object to plain object that's compatible with OAS3.
 */
export interface SerializableInterface {

    /**
     * Serializes object into OAS3 compatible object.
     *
     * Object returned by this method may be safely encoded to JSON.
     */
    serialize(): {[key: string]: any};
}
