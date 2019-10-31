var userscore=0;
var compscore=0;
var userscore_span=document.getElementById("u_score");
var compscore_span=document.getElementById("c_score");
var scoreboard_div=document.querySelector(".scoreboard");
var result_div=document.querySelector(".result > p");
var rock=document.getElementById("r");
var paper=document.getElementById("p");
var scissors=document.getElementById("s");
var reload=document.getElementById("button");

function getcompchoice()
{
	var choices=['r','p','s'];
	var rand=Math.floor(Math.random()*3);
	return choices[rand];
}
function converttoword(letter)
{
	if(letter=="r")
		return "ROCK";
	if(letter=="p")
		return "PAPER";
	if(letter=="s")
		return "SCISSORS";
}
function win(userchoice,compchoice)
{
	console.log(userscore);

	userscore=(userscore+1);
	console.log(userscore);
	userscore_span.innerHTML=userscore;
	compscore_span.innerHTML=compscore;
	result_div.innerHTML=converttoword(userchoice) + " beats " + converttoword(compchoice) +" YOU WIN!!";
}
function lose(userchoice,compchoice)
{
	compscore=(compscore+1);
	console.log(compscore);

	userscore_span.innerHTML=userscore;
	compscore_span.innerHTML=compscore;
	result_div.innerHTML=converttoword(compchoice) +" beats " + converttoword(userchoice)+" YOU LOSE!!";
}
function draw(userchoice,compchoice)
{
	userscore_span.innerHTML=userscore;
	compscore_span.innerHTML=compscore;
	result_div.innerHTML="IT's a DRAW!!";
}
function game(userchoice)
{
	var compchoice=getcompchoice();
	switch(userchoice + compchoice){
		case "rs":
		case "pr":
		case "sp":
			win(userchoice,compchoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userchoice,compchoice);
			break;
		case "rr":
		case "ss":
		case "pp":
			draw(userchoice,compchoice);
			break;
}

}
function re()
{
	document.location.reload(true);
}

rock.addEventListener('click',function(){
	game("r");
})
paper.addEventListener('click',function(){
	game("p");
})
scissors.addEventListener('click',function(){
	game("s");
})
reload.addEventListener('click',function(){
	re();
})
