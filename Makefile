
build-dev:
	cd toqueue && $(MAKE) build-dev
	cd toqueueserver && $(MAKE) build
	
run-dev:
	docker-compose -f docker-compose-dev.yml up
