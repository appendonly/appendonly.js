/**
* Create append only stream.
*/
function AO ( streamId ) {

}

/**
* Append some data to a stream.
*
* If the stream exists and `currentHash` is passed in, the operation
* will only succeed if the head of the stream points to currentHash.
*
* If the stream doesn't exist or is not open an Error is throw.
*
* @param {string} streamId Your stream identifier
* @param {multihash} [currentHash]
* @param {Object|String|Number|Boolean} data
*/
AO.prototype.append = function ( data ) {
}

/**
* Replay the stream.
*
* @param {string} streamId - Your stream identifier
* @param {Object} [opts] - behaviour modifiers
*
* @param {multihash} [opts.startHash] - If this value is given, it refers
* to a point in the stream and replay of the stream starts at that
* position. Otherwise the stream is played from the beginning.
*
* @param {multihash} [opts.stopHash] - The stream is closed when this state
* is reached. Otherwise the stream stops when the head state is reached.
*
* @param {Boolean} [opts.includeData] - If set to true, the result
* stream contains a `data` property, ie. {@link get} is called on the
* hashes for you.
*
* @returns {(Stream of multihashes|Stream of data=)}
*/
AO.prototype.replay = function ( opts ) {
}

/**
* Follow the stream.
*
* Like {@link replay} except the default starting position is the
* head of the stream instead of the beginning.
*
* The other difference is that this stream only stops when the
* log is closed. A replay stream stops when the head position is
* reached (stream has caught up).
*
* @param {StreamId} streamId Your stream identifier
*
* @param {Object} [opts] - behaviour modifiers
*
* @param {multihash} [opts.startHash] - If this value is given, it refers
* to a point in the stream and replay of the stream starts at that
* position. Otherwise the stream is played from the beginning.
*
* @param {Boolean} [opts.excludeData] - If set to true, the result
* stream contains a `data` property, ie. {@link get} is called on the
* hashes for you.
*
* @returns {LogStream}
*/
AO.prototype.subscribe = function ( opts ) {
}

/**
* Retrieve the head hash op the stream
* @returns {multihash}
*/
AO.prototype.current = function () {
}

/**
* Retrieve the data corresponding to a multihash
* @param {multishash} multihash - the state to retrieve
* @returns {(Object|string|Buffer)}
*/
AO.prototype.get = function ( multihash ) {
}
