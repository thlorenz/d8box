## Notes from First Twitch Stream


- v5.8 is the last version with really no turbo fan
- get d8 from https://github.com/GoogleChromeLabs/jsvu
- `--trace-opt` and `--trace-depopt` to trace optimizations
- 
- `--trace-turbo-inlining` to see functions inlined
- `--turbo-filter=~` combined with `--no-turbo` to turn off turbo fan completely even in v5.9,
  however the former spams `--trace-opt`
- `for..of` has implicit `try..finally` around it (per spec) to implement the iterator closing, so
  that's the killer for Crankshaft
