var functionNames = [
	'add',
	'subtract',
	'tax',
	'stringLength',
	'startsWith',
	'stringRepeat',
	'nSum',
	'join',
	'countLetters'
];

for(var i=0; i<functionNames.length; i++) {
	var name = functionNames[i];
	var form = document.querySelector('.'+name+'-section form');
	var output = document.querySelector('.'+name+'-section .output');
	(function(name, form, output) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();

			if(!window.hasOwnProperty(name)) {
				output.innerHTML = 'There is no function called `'+name+'` to process this form.';
			}
			else {
				var argOptions1 = document.getElementsByClassName(name+'-options-1');
				var argEls = document.getElementsByClassName(name);
				var args = [];

				if(argOptions1.length) {
					var argOptions1Array = [];
					for(var i=0; i<argOptions1.length; i++) {
						if(argOptions1[i].checked) {
							argOptions1Array.push(argOptions1[i].value);
						}
					}
					args.push(argOptions1Array);
				}

				for(var i=0; i<argEls.length; i++) {
					args.push(argEls[i].value);
				}

				output.innerHTML = window[name].apply(null, args).toString();
			}

			return false;
		});
	})(name, form, output);
}

// maze
var wrapper = document.querySelector('div.maze');
wrapper.innerHTML = '';
if(!window.hasOwnProperty('maze')) {
	wrapper.innerHTML = 'There is no function called `maze`.';
}
else {
	var matrix = maze();
	var active = {
		x: 0,
		y: 0
	};
	for(var y = 0; y<matrix.length; y++) {
		var row = document.createElement('div');
		row.className = 'maze-row';
		for(var x = 0; x<matrix[y].length; x++) {
			var cell = document.createElement('div');
			cell.className = 'maze-cell';
			if(matrix[y][x] === true) {
				cell.className += ' wall';
			}
			else if(matrix[y][x] === 'start') {
				active.x = x;
				active.y = y;
				cell.className += ' active';
			}
			else if(matrix[y][x] === 'end') {
				cell.innerHTML = 'X';
			}
			row.appendChild(cell);
		}
		wrapper.appendChild(row);
	}

	document.querySelector('.maze .up').addEventListener('click', function() {
		if(active.y > 0 && matrix[active.y-1][active.x] !== true) active.y -= 1;
		updateActive();
	});
	document.querySelector('.maze .left').addEventListener('click', function() {
		if(active.x > 0 && matrix[active.y][active.x-1] !== true) active.x -= 1;
		updateActive();
	});
	document.querySelector('.maze .right').addEventListener('click', function() {
		if(active.x < matrix[active.y].length - 1 && matrix[active.y][active.x+1] !== true) active.x += 1;
		updateActive();
	});
	document.querySelector('.maze .down').addEventListener('click', function() {
		if(active.y < matrix.length - 1 && matrix[active.y+1][active.x] !== true) active.y += 1;
		updateActive();
	});

	function updateActive() {
		document.querySelector('.active').className = 'maze-cell';
		var row = document.querySelectorAll('.maze-row')[active.y];
		row.querySelectorAll('.maze-cell')[active.x].className = 'maze-cell active';

	}
}

// table
var fullArray = [
	{year: 2001, make: 'Toyota', model: 'Camry', color: 'Grey'},
	{year: 2002, make: 'Toyota', model: 'Camry', color: 'Red'},
	{year: 2003, make: 'Toyota', model: 'Corola', color: 'Green'},
	{year: 2004, make: 'Toyota', model: 'Camry', color: 'Blue'},
	{year: 2005, make: 'Toyota', model: 'Camry', color: 'Black'},
	{year: 2005, make: 'Honda', model: 'Accord', color: 'Red'},
	{year: 2003, make: 'Honda', model: 'Accord', color: 'Red'},
	{year: 2006, make: 'Honda', model: 'Accord', color: 'Red'},
	{year: 2010, make: 'Ford', model: 'F150', color: 'Blue'}
];
renderTable(fullArray);
document.querySelector('.table-section button[type="submit"]').addEventListener('click', function(e) {
	e.preventDefault();
	var filters = document.querySelectorAll('.table-section .table');
	var data = table(fullArray, filters[0].value, filters[1].value, filters[2].value, filters[3].value);
	renderTable(data);
	return false;
});

function renderTable(data) {
	var body = document.querySelector('.table-section tbody');
	body.innerHTML = '';
	for(var i=0; i<data.length; i++) {
		var row = document.createElement('tr');
		for(var j in data[i]) {
			var cell = document.createElement('td');
			cell.innerHTML = data[i][j];
			row.appendChild(cell);
		}
		body.appendChild(row);
	}
}
