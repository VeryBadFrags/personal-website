dist/index.html: build/index.html dist/ dist/style.css dist/loic_vourch_97E49997_public.asc package.json
	npm run html-minifier

dist/loic_vourch_97E49997_public.asc: assets/loic_vourch_97E49997_public.asc dist/
	cp assets/loic_vourch_97E49997_public.asc dist/loic_vourch_97E49997_public.asc

dist/:
	mkdir -p dist

dist/style.css: src/style.css
	cp src/style.css dist/style.css

build/index.html: build/ build/content.html src/wrapper.html
	python3 bundle.py

build/content.html: build/ src/index.md package.json node_modules/
	npm run marked

build/:
	mkdir -p build

node_modules/:
	npm install

.PHONY: clean

clean:
	rm -rf build/ dist/ node_modules/
