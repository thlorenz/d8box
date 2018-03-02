# d8box

Experimenting with different v8 versions to see perf characteristics by using v8 flags and
native functions with the `d8` debugger.

## Getting Started

The `Makefile` provides steps to get started.

Run `make fetch` (it may fail during the last step related to pulling google closure compiler,
but that's fine)

Then run `make sync`.

Alternatively follow [these instructions](https://gist.github.com/kevincennis/0cd2138c78a07412ef21) to get a
`d8` executable.

## Build d8 with TurboFan

Make sure you have `ninja` installed and run `make build-turbo`

## Build d8 with older CrankShaft

Make sure you have `ninja` installed and run `make build-crank`

## License

MIT
