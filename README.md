# Iterable

#### Status ::: Draft

(**NOTE :::** npm package is not published yet)

## Synopsys
...

## Motivation
...

## Usage

### iterable

```js
import { iterable } from '@webos/iterable'; // or without { }

iterable(10).forEach(_ => console.log('...'));

```

### asyncIterable

```js
import { asyncIterable } from '@webos/iterable';

import { sleep } from '@webos/timers';

asyncIterable([sleep(200), sleep(1800), sleep(400), sleep(340), sleep(100)])
  .each(_ => console.log('...'))
  .then(_ => console.log('Finished'));
```

## License

[MIT licensed](LICENSE)
