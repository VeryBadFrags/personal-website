assets = assets
src = src

build = build
dist = dist

node_deps = package.json node_modules/

# Generate all the output files
.PHONY: generate
generate: ${dist}/index.html ${dist}/style.css ${dist}/qr.svg ${dist}/loic_vourch_97E49997_public.asc
	@echo 'Generated site into: ${dist}/'

# Minify HTML
${dist}/index.html: ${build}/bundled.html ${dist} ${node_deps}
	npm run html-minifier

# Merge content and wrapper
${build}/bundled.html: ${build} ${build}/content.html ${build}/wrapper.html bundle.js
	node bundle.js

# Generate content from Markdown
${build}/content.html: ${build} ${src}/index.md ${node_deps}
	npm run marked

# Inject Favicons into wrapper html
${build}/wrapper.html: ${src}/wrapper.html ${build}/faviconData.json ${node_deps}
	npm run favicon-inject

# Generate favicons
${build}/faviconData.json: faviconDescription.json ${assets}/programmer.svg ${node_deps}
	npm run favicon-generate

# Add Stylesheet
${dist}/style.css: ${src}/style.scss ${node_deps}
	npm run sass

# Generate QR code
${dist}/qr.svg: ${dist} ${node_deps}
	npm run qrcode

# Add public key
${dist}/loic_vourch_97E49997_public.asc: ${assets}/loic_vourch_97E49997_public.asc ${dist}
	cp ${assets}/loic_vourch_97E49997_public.asc ${dist}/loic_vourch_97E49997_public.asc

${build}:
	mkdir -p ${build}

${dist}:
	mkdir -p ${dist}

node_modules/:
	npm install

.PHONY: clean
clean:
	rm -rf ${build}/ ${dist}/ node_modules/
