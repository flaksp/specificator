# Safe objects modifications

Sometimes you may need to take object already used somewhere in the project and reuse it, but with small fixes. For example you have an schema that describes your user object. You want to take user's `id` field and reuse it, but for example you want to change field's description and nullability. Any object represented in Specificator out-of-the-box implements  [`cloneAndEdit()`](../src/OpenAPI/SafeEditableInterface.ts) method which will be useful here:

```typescript
const user = new User(); // it is user schema that extends default ObjectSchema

const userId = user.properties.id.cloneAndEdit((object: IntegerSchema) => {
    object.description = 'Manager ID.';
    object.nullable = true;
});
```

So variable `userId` will contain `IntegerSchema` with modified `description` and `nullable` properties.

Why should you use `cloneAndEdit()` method instead of modifying public properties? That's all because of JavaScript's nature. When you edit any object, it will be modified everywhere you used it, but `cloneAndEdit()` clones your object under the hood and allows you safely modify it without worrying about side effects.
