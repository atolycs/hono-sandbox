# Underconstruction Middleware
Validates the Host header and checks if it is in preview mode.


## How to install ?
* Test Instant HonoX instance
``` javascript
// app/routes/index.tsx

import { underconstruct } from "../../../packages/underconstruct/index"

// ...

export default createRoute(
    underconstruct(),
    (c) => {
    // ...
    return c.render(
        {c.var.underconstruct ? (
            <h1> Under constraction! </h1>
        )}
        // ...
    )
})
```
