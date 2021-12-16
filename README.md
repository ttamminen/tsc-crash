# TSC crash reproduce attempt

## Steps to reproduce error

- yarn
- yarn tsc --build

Errors from the compiler

Change these imports

```
import FullCalendar from "@fullcalendar/react";
import { EventInput } from "@fullcalendar/core";
```

to

```
import FullCalendar, { EventInput } from "@fullcalendar/react";
```

The error is gone
