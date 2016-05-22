var app = {

	calculateExponent: function (number, degree){


		var result;

		// степень больше нуля
		if (degree > 0){
			result = number;
			for (var i = 1; i<degree; i++){
				result = result * number;
			}

		// степень равна нулю
		} else if (degree === 0){
			result = 1;
		}

		// степень отрицательная
		else if (degree < 0){ //a^-n = 1 / a^n

			result = number;
			var n = -degree;

			for (var j = 1; j < n; j++){
				result = result * number;
			}

			result = 1 / result;

		}

		if (isNaN(result)){
			result = "Ошибка во введенных значениях";
		}


		return result;
	}
};


module.exports = app; //команда Node.js - для доступа к объекту app из Node.js