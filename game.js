var n=6;
var head=document.querySelector(".head");
var sq=document.querySelectorAll(".square");
var tr=document.querySelector(".try");
var bt=document.querySelector("button");
var h1=document.querySelector("h1");
var easy=document.querySelector(".easy");
var hard=document.querySelector(".hard");

var color=randomm(n);
var pick=changecl();
head.textContent=pick;

easy.addEventListener("click",function(){
	n=3;
	tr.textContent="";
	easy.style.backgroundColor="steelblue";
	hard.style.backgroundColor="white";
	h1.style.backgroundColor="steelblue";
	easy.style.color="white";
	hard.style.color="steelblue";
	color=randomm(n);
	pick=changecl();
	head.textContent=pick;
	for(var i=0;i<sq.length;i++)
	{
		if(color[i])
		{
			sq[i].style.backgroundColor=color[i];
		}
		else
		{
			sq[i].style.display="none";
		}
	}
});

hard.addEventListener("click",function(){
	tr.textContent="";
	easy.style.backgroundColor="white";
	hard.style.backgroundColor="steelblue";
	h1.style.backgroundColor="steelblue";
	hard.style.color="white";
	easy.style.color="steelblue";
	n=6;
	color=randomm(n);
	pick=changecl();
	head.textContent=pick;
	for(var i=0;i<sq.length;i++)
	{
		sq[i].style.backgroundColor=color[i];
		sq[i].style.display="block";
	}
});

bt.addEventListener("click",function(){
	tr.textContent="";
	bt.textContent="New Colors";
	h1.style.backgroundColor="steelblue";
	color=randomm(n);
	pick=changecl();
	head.textContent=pick;
	for(i=0;i<n;i++)
	{
		if(color[i])
		{
			sq[i].style.backgroundColor=color[i];
		}
		else
		{
			sq[i].style.display="none";
		}
	}
});

for(var i = 0; i < n; i++)
{
	sq[i].style.backgroundColor=color[i];
	sq[i].addEventListener("click",function(){

		var cl=this.style.backgroundColor;
		if(cl===pick)
		{
			tr.textContent="win!!";
			changecolor(cl);
			h1.style.backgroundColor=cl;
			bt.textContent="play again";
		}
		else
		{
			tr.textContent="Wrong";
			this.style.backgroundColor="#232323";
		}
	});
}

function changecl()
{
	c=Math.floor(Math.random() * n);
	return color[c];
}
function changecolor(cl)
{
	for(i=0;i<sq.length;i++)
	{
		sq[i].style.backgroundColor=cl;
	}
}
function randomm(n)
{
	var a=[];
	for(i=0;i<n;i++)
	{
		a[i]=randomcl();
	}
	return a;
}
function randomcl()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return ("rgb"+"("+r+", "+g+", "+b+")");
}
