ROOT = $(shell pwd)
DEPOT_TOOLS=$(ROOT)/depot_tools
GCLIENT=$(DEPOT_TOOLS)/gclient

# Instructions: https://gist.github.com/kevincennis/0cd2138c78a07412ef21
fetch: $(GCLIENT)
	PATH=$(DEPOT_TOOLS):$(PATH) fetch v8 && \
	cd $(ROOT)/v8 && \
	$(GCLIENT) sync

sync: $(GCLIENT)
	cd $(ROOT)/v8 && \
	PATH=$(DEPOT_TOOLS):$(PATH) $(GCLIENT) sync --with_branch_heads

# Make sure to run fetch first
build-turbo:
	cd v8 && git checkout branch-heads/6.6 &&                      \
	PATH=$(DEPOT_TOOLS):$(PATH) $(GCLIENT) sync --force --reset && \
	PATH=$(DEPOT_TOOLS):$(PATH) tools/dev/v8gen.py x64.optdebug && \
	ninja -C out.gn/x64.optdebug

# Older Instructions: https://gist.github.com/kevincennis/0cd2138c78a07412ef21/49bcb665b329363f542b32a6c542625ffb5fd536
build-crank:
	cd v8 && git checkout branch-heads/5.9 &&                      \
	PATH=$(DEPOT_TOOLS):$(PATH) $(GCLIENT) sync --force --reset && \
	make x64.release -j8

$(GCLIENT):
	git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git

.PHONY: fetch build
