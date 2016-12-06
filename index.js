var BLACK = 0;
var WHITE = 1;
var BACK = 2;
var GRID = 3;
var OUTLINE1 = 4;
var OUTLINE2 = 5;
var LOWEST = 6;
var SEA = 7;
var LAND = 8;
var HIGHEST = 9;

var debug = 0;

var view;

var nocols = 65536;

var rtable = new Array(65536);
var gtable = new Array(65536);
var btable = new Array(65536);

var ftype = ['bmp','ppm','xpm'];

var file_type = 'bmp';

var letters = ['@','$','.',',',':',';','-','+','=','#','*','&','A','B','C','D',
	'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
	'U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j',
	'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

