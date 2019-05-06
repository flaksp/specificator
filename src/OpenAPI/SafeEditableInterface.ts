export interface SafeEditableInterface {
    /**
     * Safely clones object and modifies it.
     */
    cloneAndEdit<T>(callback: (object: T) => void): T;
}
