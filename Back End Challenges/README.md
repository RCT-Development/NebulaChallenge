1.
        static string Likes(List<string> likes)
        {
            if (likes.Count == 0)
                return "No one likes this";
            if (likes.Count == 1)
                return $"{likes[0]} likes this";
            if (likes.Count == 2)
                return $"{likes[0]} and {likes[1]} like this";
            if (likes.Count == 3)
                return $"{likes[0]}, {likes[1]} and {likes[2]} like this";
            return $"{likes[0]}, {likes[1]} and {likes.Count - 2} others like this";
        }

2.
	    class Factory
    	{
       		private RobotService _robotService;
	        private PartsService _partsService;
	        private CarService _carService;

	        public Factory(RobotService robotService, PartsService partsService, CarService carService)
	        {
        	    _robotService = robotService;
	            _partsService = partsService;
	            _carService = carService;
	        }

	        public Robot BuildRobot(Enum RobotType)
	        {
	            var parts = _partsService.GetParts(RobotType);
	            return RobotType switch
	            {
	                RoboticDog => _robotService.BuildRobotDog(parts),
	                RoboticCat => _robotService.BuildRobotCat(parts),
	                RoboticDrone => _robotService.BuildRobotDrone(parts),
	                RoboticCar => _robotService.BuildRobotCar(parts),
	                _ => null,
	            };
	        }

	        public Car BuildCar(Enum CarType)
	        {
	            if (!new List<Enum> { Toyota, Ford, Opel, Honda }.Contains(CarType))
	                return null;
	         
        	    var parts = _partsService.GetParts(CarType);
	            return _carService.BuildCar(parts);
	        }
	    }
