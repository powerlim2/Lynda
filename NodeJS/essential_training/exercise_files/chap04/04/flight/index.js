var num_flights = 0,
	dests = [];


var Flight = function () {
	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};

	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
			if(prop === 'destination' && info[prop] !== 'undefined') {
				dests.push(info[prop])
			}
		}
	};

	this.triggerDepart = function () {
		this.data.actualDepart = Date.now();
	};

	this.triggerArrive = function () {
		this.data.actualArrive = Date.now();
	};

	this.getInformation = function () {
		return this.data;
	};



};

exports.create = function (info) {
	var instance = new Flight();

	instance.fill(info);
	num_flights++;
	
	return instance;
};


exports.getNumFlights = function() {
	return num_flights;
};

exports.getDestinations = function() {
	return dests;
};


