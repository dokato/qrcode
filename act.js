
var draw_qrcode = function(text, typeNumber, errorCorrectLevel) {
	document.write(create_qrcode(text, typeNumber, errorCorrectLevel) );
};

var create_qrcode = function(text, typeNumber, errorCorrectLevel, table) {

	var qr = qrcode(typeNumber || 9, errorCorrectLevel || 'M');
	qr.addData(text);
	qr.make();
	return qr.createImgTag();
};


chrome.tabs.getSelected(null, function(tab) {
  rob_qr(tab.url);
});

function rob_qr(tabUrl) {
	var main, qr, img, element;
	
	main = document.getElementById('main');
	
	qr=create_qrcode(tabUrl);
	main.innerHTML="<p>Obecna strona www:</p>" + "<p><i>"+tabUrl+"</i></p>" +qr;

	img = document.createElement('img');
	img.src = 'footer.jpg';
	element = document.getElementById('ad');
	document.body.appendChild(img);
}


