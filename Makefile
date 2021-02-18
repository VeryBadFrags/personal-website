build/: src/* assets/* node_modules/
	npm run build

# Node modules
node_modules/: package.json
	npm i

.PHONY: clean
clean:
	rm -rf build/ node_modules/
