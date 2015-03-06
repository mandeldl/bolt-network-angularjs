app.controller('MainController', ['$scope', function($scope) {
  $scope.program = {
	  series: "Sherlock",
	  series_img: "img/sherlock.jpg",
	  genre: "Crime drama",
	  season: 3,
	  episode: "The Empty Hearse",
	  description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
	  datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  };
  $scope.arrested = {
  	series: "Arrested Development",
	  series_img: "img/arrested.jpg",
	  genre: "Comedy",
	  season: 2,
	  episode: "The One Where Michael Leaves",
	  description: "George Sr. is at large, making Michael next in line to be prosecuted for the Bluth Company crimes. Meanwhile, Michael is vexed to find that the family is fine without him, and police mistake Oscar for George Sr. and arrest him.",
	  datetime: new Date(2004, 11, 07, 21, 30, 00, 00)
  }
}]);