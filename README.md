# Appendonly

Append only log with streaming reply and subscription.

```js
const AO = require('ao')
const ao = AO('my-api-key')
const log = ao.log('my-log')

```


Works in the browser and over a REST API.

Three backend plug-in points:

- "state" Head backend (DynamoDB, Redis, Deepstream)
- "log" Storage backend (DynamoDB)
- "io" Transport layer (Deepstream, PubNub)

- https://github.com/multiformats/multihash
- https://github.com/multiformats/js-multihash#usage
