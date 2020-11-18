# Generate all the output files
.PHONY: generate
generate: dist/index.html dist/style.css dist/loic_vourch_97E49997_public.asc
	@echo 'Generated site into: dist/'

# Minify HTML
dist/index.html: build/bundled.html dist/ package.json
	npm run html-minifier

# Merge content and wrapper
build/bundled.html: build/ build/content.html build/wrapper.html bundle.js
	node bundle.js

# Generate content from Markdown
build/content.html: build/ src/index.md package.json node_modules/
	npm run marked

# Inject Favicons into wrapper html
build/wrapper.html: src/wrapper.html package.json build/faviconData.json
	npm run favicon-inject

# Add public key
dist/loic_vourch_97E49997_public.asc: assets/loic_vourch_97E49997_public.asc dist/
	cp assets/loic_vourch_97E49997_public.asc dist/loic_vourch_97E49997_public.asc

# Add Stylesheet
dist/style.css: src/style.scss node_modules/ package.json
	npm run sass

# Generate favicons
build/faviconData.json: faviconDescription.json assets/programmer.svg package.json
	npm run favicon-generate

build/:
	mkdir -p build

dist/:
	mkdir -p dist

node_modules/:
	npm install

.PHONY: clean
clean:
	rm -rf build/ dist/ node_modules/
