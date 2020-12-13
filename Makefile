ASSETS = assets
SRC = src

BUILD = build
DIST = dist

NODE_DEPS = package.json node_modules/

# Generate all the output files
.PHONY: generate
generate: ${DIST}/index.html ${DIST}/style.css ${DIST}/qr.svg ${DIST}/loic_vourch_97E49997_public.asc
	@echo 'Generated site into: ${DIST}/'

# Minify HTML
${DIST}/index.html: ${BUILD}/bundled.html ${DIST} ${NODE_DEPS}
	npm run html-minifier

# Merge content and wrapper
${BUILD}/bundled.html: ${BUILD} ${BUILD}/content.html ${BUILD}/wrapper.html bundle.js
	node bundle.js

# Generate content from Markdown
${BUILD}/content.html: ${BUILD} ${SRC}/index.md ${NODE_DEPS}
	npm run marked

# Inject Favicons into wrapper html
${BUILD}/wrapper.html: ${SRC}/wrapper.html ${BUILD}/faviconData.json ${NODE_DEPS}
	npm run favicon-inject

# Generate favicons
${BUILD}/faviconData.json: faviconDescription.json ${ASSETS}/programmer.svg ${NODE_DEPS}
	npm run favicon-generate

# Add Stylesheet
${DIST}/style.css: ${SRC}/style.scss ${NODE_DEPS}
	npm run sass

# Generate QR code
${DIST}/qr.svg: ${DIST} ${NODE_DEPS}
	npm run qrcode

# Add public key
${DIST}/loic_vourch_97E49997_public.asc: ${ASSETS}/loic_vourch_97E49997_public.asc ${DIST}
	cp ${ASSETS}/loic_vourch_97E49997_public.asc ${DIST}/loic_vourch_97E49997_public.asc

${BUILD}:
	mkdir -p ${BUILD}

${DIST}:
	mkdir -p ${DIST}

node_modules/:
	npm install

.PHONY: clean
clean:
	rm -rf ${BUILD}/ ${DIST}/ node_modules/
