//creating result table
window.addEventListener("load",function(){
	var candidates=JSON.parse(localStorage.getItem("candidates"));
	var tableContent=document.getElementById("tableContent")
	console.log(candidates)
	var tableData=document.getElementById("tableData")
	var tableBody=document.createElement("tbody")
	for(var j=0; j<candidates.length;j++){
		var row=document.createElement("tr")
		for(var k=0;k<3;k++){
			var col=document.createElement("td")
			if(k==0){
				var cell=document.createTextNode("Q"+candidates[j].question)
			}
			else if(k==1){
				var cell=document.createTextNode(candidates[j].grade+"/5")
			}
			if(k==2){
				var cell=document.createTextNode(candidates[j].comments)
			}
			col.append(cell)
			row.append(col)
			console.log(cell)
		}
		tableBody.append(row)
	}
	console.log(tableData)
	tableData.appendChild(tableBody)
})
