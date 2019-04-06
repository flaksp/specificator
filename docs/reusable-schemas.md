# Reusable schemas

Most APIs reuse some structures. For example it may be email: everywhere you use emails it will get the same structure, format and static validation requirements (length, regex, etc).

Instead of copy-pasting `StringSchema` everywhere...

```typescript
import {StringSchema} from "specificator";

const email = new StringSchema({
    example: "test@example.com",
    format: "email",
    pattern: "^.+?@.+",
    maxLength: 255,
    minLength: 3,
    nullable: true,
    oneOf: [],
    title: "Email",
});
```

... it's recommended to create schema called `Email`...

```typescript
import {StringSchema} from "specificator";

export class Email extends StringSchema {
    public example: string = "test@example.com";

    public format: string = "email";

    public pattern: string = "^.+?@.+";

    public maxLength: number = 255;

    public minLength: number = 3;

    public title: stirng = 'Email';
}
```

... and insert it everywhere just like this:

```typescript
const email = new Email({
    nullable: false,
});
```
