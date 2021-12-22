


/* Speedster class. */

var Speedster = function() {
	// implements Bicycle
};
Speedster.prototype = {
	assemble: function() {
		console.log("Speedster assemble");
	},
	wash: function() {
  	console.log("Speedster wash");
	},
	ride: function() {
		console.log("Speedster ride");
	},
	repair: function() {
  	console.log("Speedster repair");
	}
};

/* Lowrider class. */

var Lowrider = function() {
	// implements Bicycle
};
Lowrider.prototype = {
	assemble: function() {
		console.log("Lowrider assemble");
	},
	wash: function() {
  	console.log("Lowrider wash");
	},
	ride: function() {
		console.log("Lowrider ride");
	},
	repair: function() {
  	console.log("Lowrider repair");
	}
};


/* ComfortCruiser class. */

var ComfortCruiser = function() {
	// implements Bicycle
};
ComfortCruiser.prototype = {
	assemble: function() {
		console.log("ComfortCruiser assemble");
	},
	wash: function() {
  	console.log("ComfortCruiser wash");
	},
	ride: function() {
		console.log("ComfortCruiser ride");
	},
	repair: function() {
  	console.log("ComfortCruiser repair");
	}
};

/* BicycleFactory namespace. */

var BicycleFactory = {
	createBicycle: function(model) {
		var bicycle;
		switch(model) {
		case "The Speedster":
			bicycle = new Speedster();
			break;
		case "The Lowrider":
			bicycle = new Lowrider();
			break;
		case "The Comfort Cruiser":
		default:
			bicycle = new ComfortCruiser();
		}

		// Interface.ensureImplements(bicycle, Bicycle);

		return bicycle;
	}
};



/* BicycleShop */

var BicycleShop = function() {};
BicycleShop.prototype = {
	sellBicycle: function(model) {
		var bicycle = BicycleFactory.createBicycle(model);
		bicycle.assemble();
		bicycle.wash();
		return bicycle;
	}
};


/* The Bicycle interface. (Get the interface class from Interfaces.js) */
// var Bicycle = new Interface("Bicycle", ["assemble", "wash", "ride", "repair"]);



const shop = new BicycleShop();

const bicycle1 = shop.sellBicycle("The Speedster");
bicycle1.ride();











