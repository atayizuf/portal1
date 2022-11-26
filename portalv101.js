let kul = document.getElementById("user-header-r2");
let a1=kul.getAttribute("action");
if (a1==="/") {
    console.log("kullanıcı giriş yapmamış.");
    var y1=document.getElementsByClassName("cms")[1];
    //kullanıcı giriş yapmadığında bu kısım kullanılacak.
}
else {
    var y1=document.getElementsByClassName("cms")[1];
    //kullanıcı giriş yaptığında...
}
y1.children[0].appendChild(document.createElement("button"));

if (a1==="/") {
	var y2=document.getElementsByTagName("button")[2]; //diğer durumda 
}
else {
	var y2=document.getElementsByTagName("button")[0]; //diğer durumda 0
}
// div sil - divlerle tablo oluştur.
y2.setAttribute("durum", "pasif");
y2.setAttribute("id","butbut");
y2.style.outline="none"
y2.style.border="none";
y2.innerHTML="Analiz Göster!";
y2.style.backgroundColor="#2a6fb6";
y2.style.color="white";
y2.style.marginLeft="8px"
y2.style.width="7rem"
y2.style.borderRadius="5px"
y2.addEventListener("click", fonk);
//y2.addEventListener("click", sakla);
function fonk(){
	if (y2.getAttribute("durum")==="pasif"){
		y2.setAttribute("durum","aktif")
		y2.innerHTML="Analiz Sakla!";
    	//buraya yazılacak.
		let scores=document.getElementsByClassName("table-score");
		let tumu=[];
		let ust=[];
		let alt=[];
		let nan=[];
		// 'canc.','1:0 pen.'
		// && scores[i].innerHTML.split(':')[1].substring(1)==null  --  && scores[i].children.length==0
		for (i=0; i<scores.length;i++){
			if(scores[i].innerHTML!='canc.' && scores[i].innerHTML!='postp.' && scores[i].innerText.split(':')[1].length<3 && scores[i].children.length==0){
				// scores[i].parentElement.childNodes[1].innerHTML=scores[i].parentElement.childNodes[1].innerHTML+'<span class="ufuk" style="color: white;margin-left: 5px;width: 8px;background-color: red;height: 8px;display: inline-flex;border-radius: 50%;"></span>';
				// scores[i].style.backgroundColor="#80B62A";
				// scores[i].style.color="white";
				tumu.push(scores[i].innerText);
				// console.log(tumu); //silicem
				let g1=scores[i].innerText.split(":")[0];
				let g2=scores[i].innerText.split(":")[1];
				let sonuc=parseInt(g1)+parseInt(g2);
				if (sonuc>2){
					ust.push(sonuc);
					scores[i].style.backgroundColor="#26466e";
					scores[i].style.color="white";
				}
				else if (sonuc<=2){
					alt.push(sonuc);
					scores[i].style.backgroundColor="#b6512a";
					scores[i].style.color="white";
				}
				else if (sonuc="NaN"){
					nan.push(sonuc);
				}
			}
		}
		// console.log(tumu);
		// console.log(ust);
		// console.log(alt);
		// console.log(nan);
		yuzdeust=ust.length/(tumu.length-nan.length)*100;
		yuzdealt=alt.length/(tumu.length-nan.length)*100;
		yuzdenan=nan.length/(tumu.length-nan.length)*100;
		t1="Ertelenen yada uzatmalara giden maçlar analize dahil edilmez...";
		t2="2.5 Üst olan maç sayısı:\t"+ust.length+"\t\t%"+yuzdeust.toFixed(2);
		t3="2.5 Alt olan maç sayısı:\t"+alt.length+"\t\t%"+yuzdealt.toFixed(2);
		// t4="Ertelenen yada uzatmalara giden maçlar analize dahil edilmez...";
		//t4="Ertelenen veya Başına bir iş gelen maç sayısı:\t"+nan.length+"\t\t%"+yuzdenan.toFixed(2);
		if (nan.length==0){ 
			t5="Toplam maç sayısı: "+tumu.length;
		}
		else{
			t5="Toplam maç sayısı: "+tumu.length+"\t\t("+nan.length+" Maç Yüzde hesabından çıkarılmıştır...)";
		}
		let m1=document.getElementsByClassName("cms");
		const e1 = document.createElement("p");
		const e2 = document.createElement("p");
		const e3 = document.createElement("p");
		const e4 = document.createElement("p");
		const e5 = document.createElement("p");
		e1.append(t1);
		e2.append(t2);
		e3.append(t3);
		// e4.append(t4);
		e5.append(t5);
		m1[1].append(e1,e2,e3,e5);
		for (i=3;i<=7;i++){
			document.getElementsByTagName("p")[i].style.backgroundColor="#ff9800";
			document.getElementsByTagName("p")[i].style.textAlign="center";
			document.getElementsByTagName("p")[i].style.borderRadius="4px";

			//iş bitti
	}
	}
	else if (y2.getAttribute("durum")==="aktif"){
		for (i=3;i<=7;i++){
			document.getElementsByTagName("p")[3].remove();
			}
		
		y2.setAttribute("durum","pasif");
		y2.innerHTML="Analiz Göster!";
	}
}