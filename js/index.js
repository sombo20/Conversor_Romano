function decimalCalc(){
	var romano =document.getElementById("romano").value;
	var decimal =document.getElementById("decimal");
		decimal.value= deromanize(romano);
}
		
		
function romanoCalc() 
		{
		var arabian;
		if (document.getElementById("decimal").value <= 5999)
			arabian=document.getElementById("decimal").value;
		else arabian=5999;
		var roman=document.getElementById("romano");
		roman.value=romanize(arabian);
		}
		
		
function romanize(num) {
		var lookup={
		   M:1000,
		   CM:900,
		   D:500,
		   CD:400,
		   C:100,
		   XC:90,
		   L:50,
		   XL:40,
		   X:10,
		   IX:9,
		   V:5,
		   IV:4,
		   I:1
		 },
		roman='',
		i;
		for ( i in lookup ) {
		while ( num >= lookup[i] ) {
		roman += i;
		num -= lookup[i];
		}
		}
		return roman;
		}
		
		
function deromanize(roman){
		if (roman<1) return 0;
		else if(!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/i.test(roman=roman.toUpperCase()))
		return NaN;
		var num=0;
		roman.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,function(i){
		num+={M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}[i];
		});
		return num;
		}
		

function minmax(n,min,max)
		{
		n=parseFloat(n);
		if (min != null && n < min) n=min;
		if (max != null && n > max) n=max;
		return n || '';
		}
		
		
function resetValues(form)
		{
		for(var i=0; i < form.elements.length; i++) {
		if(form.elements[i].type == "text") { form.elements[i].value='';}
		}
		}
