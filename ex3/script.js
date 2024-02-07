
document.getElementById("canvas").width = window.innerWidth;
document.getElementById("canvas").height = window.innerHeight;


window.onresize = () => {
	document.getElementById("canvas").width = window.innerWidth;
	document.getElementById("canvas").height = window.innerHeight;
}
$(document).on("click", (e)=>{
	console.log(document.getElementById("thunder").value)
	let ctx = document.getElementById("canvas").getContext("2d")
	if (document.getElementById("thunder").checked) {
		ctx.strokeStyle = "yellow";
		//ctx.lineWidth = 15;
		//ctx.clearRect(0, 0, document.getElementById("canvas").width, document.getElementById("canvas").height)
		ctx.beginPath();
		ctx.moveTo(e.pageX, 0)
		for (var i = 1; i < 6; i++) {
			ctx.lineWidth = i+10;
			ctx.lineTo(e.pageX+(Math.random()*100), i*100)
			ctx.stroke();

		}
		ctx.stroke();
		let thunder = new Audio("thunder.wav");
		thunder.play();
		setTimeout(() => {
				ctx.clearRect(0, 0, document.getElementById("canvas").width, document.getElementById("canvas").height)

		}, 500)
	}
	
})