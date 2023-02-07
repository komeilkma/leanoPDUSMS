
function hiddenbox () {
for ( var i=0;i<=1;i++ ) {
document.querySelectorAll("section")[i].style.display="none"
}		
}

function displaybox () {
for ( var i=0;i<=1;i++ ) {
document.querySelectorAll("section")[i].style.display="flex"
}		
}


function decodepduUI () {
	
	var decodetextarea = document.getElementById("decodetextarea").value;
	var result = pduDecoder(decodetextarea);
	Swal.fire({
  icon: 'success',
  title: 'Decoded PDU',
  html:`<table>
        <tbody>
            <tr>
                <td>`+result[0]+`</td>
            </tr>
			<tr>
                <td>`+result[1]+`</td>
            </tr>
			<tr>
                <td>`+result[2]+`</td>
            </tr>
			 <tr>
                <td>`+result[3]+`</td>
            </tr>
</tbody>
</table>`
})
	
}


function encodepduUI () {
	
	var encodetextarea = document.getElementById("encodetextarea").value;
	var phone = document.getElementById("phone").value;
	var result = stringToPDU(encodetextarea,phone,"","16",-1,0);
	obj=JSON.parse(result)
	Swal.fire({
  icon: 'success',
  title: 'Encoded PDU',
  html:`<table>
        <tbody>
            <tr>
                <td>`+obj["ATCMD"]+`</td>
            </tr>
			<tr>
                <td>`+obj["PDU"]+`</td>
            </tr>

</tbody>
</table>`
})
	
}