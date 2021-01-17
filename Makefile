SRC = src
BUILD = build

NODE_DEPS = package.json node_modules/

# Generate content from Markdown
${BUILD}/index.html: ${BUILD} ${SRC}/index.md ${NODE_DEPS}
	npm run build

# Generate QR code
${BUILD}/qr.svg: ${BUILD} ${NODE_DEPS}
	npm run qrcode

${BUILD}:
	mkdir -p ${BUILD}

node_modules/:
	npm ci --only=prod --no-optional

.PHONY: clean
clean:
	rm -rf ${BUILD}/ ${DIST}/ node_modules/
