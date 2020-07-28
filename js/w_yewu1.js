var cl_one=document.getElementById("w_y_click1");
var cl_two=document.getElementById("w_y_click2");
var c1=document.getElementById("c1");
var c2=document.getElementById("c2");
//document.getElementsByClassName("icoOne")
//document.getElementsByClassName("icoTwo")
var wuliu=document.getElementsByClassName("w_y1_wl")[0];
var jinrong=document.getElementsByClassName("w_y1_jr")[0];

var wlImg1=document.getElementsByClassName("wl_img1")[0];
var wlImg2=document.getElementsByClassName("wl_img2")[0];
var jrImg1=document.getElementsByClassName("jr_img1")[0];
var jrImg2=document.getElementsByClassName("jr_img2")[0];
var i=0;
var j=0;
var time=setInterval(function(){
	i++;
	if(i==1){
		document.getElementsByClassName("wl_img1")[0].style.display="block";
		document.getElementsByClassName("wl_img2")[0].style.display="none";
	}
	else{
		document.getElementsByClassName("wl_img1")[0].style.display="none";
		document.getElementsByClassName("wl_img2")[0].style.display="block";
		i=0;
	}
},1500)
var time1=setInterval(function(){
	j++;
	if(j==1){
		document.getElementsByClassName("jr_img1")[0].style.display="block";
		document.getElementsByClassName("jr_img2")[0].style.display="none";
	}
	else{
		document.getElementsByClassName("jr_img1")[0].style.display="none";
		document.getElementsByClassName("jr_img2")[0].style.display="block";
		j=0;
	}
},1500)
	
cl_two.onclick=function(){
		document.getElementById("w_y_click2").style.borderBottom="2px solid #E13D4E";
		document.getElementById("c2").style.color="#E13D4E";
		document.getElementById("w_y_click1").style.borderBottom="2px solid #949494";
		document.getElementById("c1").style.color="#949494";
		document.getElementById("sp1").style.display="none";
		document.getElementById("sp2").style.display="block";
		
		document.getElementsByClassName("w_y1_wl")[0].style.display="none";
		document.getElementsByClassName("w_y1_jr")[0].style.display="block";
//		document.getElementById("w_y_click1").onmouseover=function(){
//			document.getElementById("c1").style.color="#E13D4E";
//		}
//		document.getElementById("w_y_click1").onmouseout=function(){
//			document.getElementById("c1").style.color="#949494";
//		}
}

cl_one.onclick=function(){
		
		document.getElementById("w_y_click1").style.borderBottom="2px solid #E13D4E";
		document.getElementById("c1").style.color="#E13D4E";
		document.getElementById("w_y_click2").style.borderBottom="2px solid #949494";
		document.getElementById("c2").style.color="#949494";
		document.getElementById("sp1").style.display="block";
		document.getElementById("sp2").style.display="none";
		
		document.getElementsByClassName("w_y1_wl")[0].style.display="block";
		document.getElementsByClassName("w_y1_jr")[0].style.display="none";
		
//		document.getElementById("w_y_click2").onmouseover=function(){
//			document.getElementById("c2").style.color="#E13D4E";
//		}
//		document.getElementById("w_y_click2").onmouseout=function(){
//			document.getElementById("c2").style.color="#949494";
//		}
}