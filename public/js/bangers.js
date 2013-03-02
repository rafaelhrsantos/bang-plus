function Bangers($scope) {
  $scope.allbangers = [
    [{"name": "lady 1",
     "img": "images/high_tatras_min.jpg",
     "sex": "female"},
    {"name": "lady 2",
     "img": "images/high_tatras2_min.jpg",
     "sex": "female"},
    {"name": "lady 3",
     "img": "images/bang.jpg",
     "sex": "female"},
     {"name": "lady 4",
     "img": "-",
     "sex": "male"},
     {"name": "lady 5",
     "img": "-",
     "sex": "male"}],
     [{"name": "lady 6",
     "img": "images/high_tatras2_min.jpg",
     "sex": "female"}]
  ];
  
  function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

   
  $scope.bangers = $scope.allbangers;
 
	$scope.female = function() { console.log("female");
		$scope.bangers = new Array(new Array);
		var count = 0;
		var array = 0;
		for (var i = 0; i < $scope.allbangers.length; i++) {
			for (var j = 0; j < $scope.allbangers[i].length; j++) {
				if($scope.allbangers[i][j].sex == "female") {
					$scope.bangers[array][count] = clone($scope.allbangers[i][j]);
					count += 1;
					if((count % 5) == 0) { array += 1; }
				}
		}}};
	
	$scope.male = function() { console.log("male");
		$scope.bangers = new Array(new Array);
		var count = 0;
		var array = 0;
		for (var i = 0; i < $scope.allbangers.length; i++) {
			for (var j = 0; j < $scope.allbangers[i].length; j++) {
				if($scope.allbangers[i][j].sex == "male") {
					$scope.bangers[array][count] = clone($scope.allbangers[i][j]);
					count += 1;
					if((count % 5) == 0) { array += 1; }
				}
		}}};
	
	$scope.all = function() { $scope.bangers = $scope.allbangers; };
	
	$scope.none = function() { $scope.bangers = new Array(new Array) };

};
