var slide_img=[];
slide_img[0]='photo\\vaycuoi\\slide1.jpg';
slide_img[1]='photo\\vaycuoi\\slide2.jpg';
slide_img[2]='photo\\vaycuoi\\slide3.jpg';
var i=0;
$k=0;
function change_slide() {
	document.slide.src=slide_img[i];
	if(i<slide_img.length-1){
		i++;
	}else{
		i=0;
	}
	//không được khả thi. chỉ đối với ít slide.<=4
	if(i==0){
		$('#dot_clien1').css('background', 'white');
		$('#dot_clien2').css('background', '#ff000000');
		$('#dot_clien3').css('background', '#ff000000');
	}
	if(i==1){
		$('#dot_clien1').css('background', '#ff000000');
		$('#dot_clien2').css('background', 'white');
		$('#dot_clien3').css('background', '#ff000000');
	}
	if(i==2){
		$('#dot_clien1').css('background', '#ff000000');
		$('#dot_clien2').css('background', '#ff000000');
		$('#dot_clien3').css('background', 'white');
	}
	// var dot_clien=$('.dot_clien');
	// dot_clien[i].css('background', 'white');
	// for(k=0;k<dot_clien.length-1;k++){
	// 	if(k!=i){
	// 		dot_clien[k].css('background', '#ff000000');
	// 	}
	// }
	setTimeout('change_slide()', 3000);
}
window.onload=change_slide;
function show1() {
	document.getElementById('menu_c21').style.display='inline-block';
	document.getElementById('it_1').style.color='yellow';

}
function notshow1() {
	document.getElementById('menu_c21').style.display='none';
	document.getElementById('it_1').style.color='white'
}
function show2() {
	document.getElementById('menu_c22').style.display='inline-block';
	document.getElementById('it_2').style.color='yellow'
}
function notshow2() {
	document.getElementById('menu_c22').style.display='none';
	document.getElementById('it_2').style.color='white'
}
function sp_click_menu1(){
	if (document.getElementById('sp_ul_menu1').style.display=='none') {
		document.getElementById('sp_ul_menu1').style.display='inline-block';
		document.getElementById('sp_h4_menu1').style.color='yellow';
		document.getElementById('sp_hr_menu1').style.display='block';

	}else{
		document.getElementById('sp_ul_menu1').style.display='none';
		document.getElementById('sp_h4_menu1').style.color='black';
		document.getElementById('sp_hr_menu1').style.display='none';
	}
}
function sp_click_menu2(){
	if (document.getElementById('sp_ul_menu2').style.display=='none') {
		document.getElementById('sp_ul_menu2').style.display='inline-block';
		document.getElementById('sp_h4_menu2').style.color='yellow';
		document.getElementById('sp_hr_menu2').style.display='block';

	}else{
		document.getElementById('sp_ul_menu2').style.display='none';
		document.getElementById('sp_h4_menu2').style.color='black';
		document.getElementById('sp_hr_menu2').style.display='none';
	}
}
function sp_click_menu3(){
	if (document.getElementById('sp_ul_menu3').style.display=='none') {
		document.getElementById('sp_ul_menu3').style.display='inline-block';
		document.getElementById('sp_h4_menu3').style.color='yellow';
		document.getElementById('sp_hr_menu3').style.display='block';

	}else{
		document.getElementById('sp_ul_menu3').style.display='none';
		document.getElementById('sp_h4_menu3').style.color='black';
		document.getElementById('sp_hr_menu3').style.display='none';
	}
}
function sp_click_menu4(){
	if (document.getElementById('sp_ul_menu4').style.display=='none') {
		document.getElementById('sp_ul_menu4').style.display='inline-block';
		document.getElementById('sp_h4_menu4').style.color='yellow';
		document.getElementById('sp_hr_menu4').style.display='block';

	}else{
		document.getElementById('sp_ul_menu4').style.display='none';
		document.getElementById('sp_h4_menu4').style.color='black';
		document.getElementById('sp_hr_menu4').style.display='none';
	}
}
function sp_click_menu5(){
	if (document.getElementById('sp_ul_menu5').style.display=='none') {
		document.getElementById('sp_ul_menu5').style.display='inline-block';
		document.getElementById('sp_h4_menu5').style.color='yellow';
		document.getElementById('sp_hr_menu5').style.display='block';

	}else{
		document.getElementById('sp_ul_menu5').style.display='none';
		document.getElementById('sp_h4_menu5').style.color='black';
		document.getElementById('sp_hr_menu5').style.display='none';
	}
}
function sp1_ip_bt1(){
	document.getElementById('sp1_ip_bt1').style.background="#dbb971";
	document.getElementById('sp1_ip_bt2').style.background="#ffffff00";
}
function sp1_ip_bt2(){
	document.getElementById('sp1_ip_bt2').style.background="#dbb971";
	document.getElementById('sp1_ip_bt1').style.background="#ffffff00";
}
function searchhome(){
	document.getElementById('search1_1').style.display='inline-block';
}