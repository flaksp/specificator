/**
 * Classes that implement this interface marked as "safe editable" - that means you may safely edit them without worrying about side effects.
 */
export interface SafeEditableInterface {
    /**
     * Safely clones object and modifies it.
     */
    cloneAndEdit<T>(callback: (object: T) => void): T;
}
