/*
 Basic Singleton.

var Singleton = {
  attribute1: true,
  attribute2: 10,
  method1: function() {
  },
  method2: function(arg) {
} };

 */

/*

 Singleton with Private Members, step 3.

MyNamespace.Singleton = (function() {
  // Private members.
  var privateAttribute1 = false;
  var privateAttribute2 = [1, 2, 3];
  function privateMethod1() {
    ...
  }
  function privateMethod2(args) {
... }
  return { // Public members.
    publicAttribute1: true,
    publicAttribute2: 10,
    publicMethod1: function() {
      ...
    },
    publicMethod2: function(args) {
... }
}; })();

 */


var SimpleXhrFactory = (function() {
	// The three branches.
	var standard = {
		createXhrObject: function() {
			return new XMLHttpRequest();
		} };
	var activeXNew = {
		createXhrObject: function() {
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
	};
	var activeXOld = {
		createXhrObject: function() {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} };
	// To assign the branch, try each method; return whatever doesn't fail.
	var testObject;
	try {
		testObject = standard.createXhrObject();
		return standard; // Return this if no error was thrown.
	}
	catch(e) {
		try {
			testObject = activeXNew.createXhrObject();
			return activeXNew; // Return this if no error was thrown.
		}
		catch(e) {
			try {
				testObject = activeXOld.createXhrObject();
				return activeXOld; // Return this if no error was thrown.
			} catch(e) {
				throw new Error("No XHR object found in this environment.");
			}
		} }
})();



