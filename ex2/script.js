

$(".link").on("click", async function(){
		let page = $(this).attr("id");
		let r = await fetch(`./pages/${page}.html`);
		let pageData = await r.text();
		$("#content").html(pageData)
		

})

