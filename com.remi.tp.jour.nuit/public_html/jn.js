/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 
document.getElementById("btnJour").onclick = check;
let dayLight = true;

function check(){
	if(document.getElementById('btnJour').value='Jour')
document.getElementById('btnJour').value='Nuit';
document.body.style.backgroundColor = 'red';
dayLight = false;
}