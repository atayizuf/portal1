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
y2.setAttribute("durum","pasif");
y2.setAttribute("id","butbut");
y2.style.border="none";
y2.innerHTML="Analiz Göster!";
y2.style.backgroundColor="#2a6fb6";
y2.style.color="white";
y2.style.marginLeft="8px"
y2.style.width="7rem"
y2.style.borderRadius="2rem"
y2.addEventListener("click", fonk);
//y2.addEventListener("click", sakla);
function fonk(){
	if (y2.getAttribute("durum")==="pasif"){
		y2.setAttribute("durum","aktif")
		y2.innerHTML="Analiz Sakla!";
    	//buraya yazılacak.
		let scores=document.getElementsByClassName("center bold table-odds table-score");
		let tumu=[];
		let ust=[];
		let alt=[];
		let nan=[];
		for (i=0; i<scores.length;i++){
			tumu.push(scores[i].innerText);
			let g1=scores[i].innerText.split(":")[0];
			let g2=scores[i].innerText.split(":")[1];
			let sonuc=parseInt(g1)+parseInt(g2);
			if (sonuc>2){
				ust.push(sonuc);
			}
			else if (sonuc<=2){
				alt.push(sonuc);
			}
			else if (sonuc="NaN"){
				nan.push(sonuc);
			} 
		}
		yuzdeust=ust.length/(tumu.length-nan.length)*100;
		yuzdealt=alt.length/(tumu.length-nan.length)*100;
		yuzdenan=nan.length/(tumu.length-nan.length)*100;
		t1="Bu script bitmiş, oynanmakta olan veya ertelenmiş maçların sayısı üzerinde çalışır...";
		t2="2.5 Üst olan maç sayısı:\t"+ust.length+"\t\t%"+yuzdeust.toFixed(2);
		t3="2.5 Alt olan maç sayısı:\t"+alt.length+"\t\t%"+yuzdealt.toFixed(2);
		t4="Ertelenen veya Başına bir iş gelen maç sayısı:\t"+nan.length+"\t\t%"+yuzdenan.toFixed(2);
		t5="Toplam maç sayısı: "+tumu.length+"\t\t("+nan.length+" Maç Yüzde hesabından çıkarılmıştır...)";
		let m1=document.getElementsByClassName("cms");
		const e1 = document.createElement("p");
		const e2 = document.createElement("p");
		const e3 = document.createElement("p");
		const e4 = document.createElement("p");
		const e5 = document.createElement("p");
		e1.append(t1);
		e2.append(t2);
		e3.append(t3);
		e4.append(t4);
		e5.append(t5);
		m1[1].append(e1,e2,e3,e4,e5);
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