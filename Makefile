# Makefile for Node.js project

.DEFAULT_GOAL := help

.PHONY: help
help:
	@echo "Available targets:"
	@echo "  make dev     - Run dev"
	@echo "  make build   - Run build"
	@echo "  make format  - Format the code using Prettier"
	@echo "  make clean   - Remove the dist/ folder"
	@echo "  make help    - Display this help message"

.PHONY: build
build: node_modules
	pnpm run build

.PHONY: dev
dev: node_modules
	pnpm run dev

.PHONY: format
format: node_modules
	pnpm run format

.PHONY: clean
clean:
	pnpm run clean

# Install dependencies if 'node_modules' is missing
node_modules: pnpm-lock.yaml
	pnpm install
