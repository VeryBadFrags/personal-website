dist/index.html: build/bundled.html dist/ dist/style.css dist/loic_vourch_97E49997_public.asc dist/favicon.svg build/faviconData.json package.json
	npm run html-minifier

build/bundled.html: build/ build/content.html build/wrapper.html
	node bundle.js

build/content.html: build/ src/index.md package.json node_modules/
	npm run marked

build/wrapper.html: src/wrapper.html package.json build/faviconData.json
	npm run favicon-inject

dist/loic_vourch_97E49997_public.asc: assets/loic_vourch_97E49997_public.asc dist/
	cp assets/loic_vourch_97E49997_public.asc dist/loic_vourch_97E49997_public.asc

dist/style.css: src/style.css
	cp src/style.css dist/style.css

dist/favicon.svg: assets/programmer.svg
	cp assets/programmer.svg dist/favicon.svg

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
