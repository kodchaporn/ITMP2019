fortuneBank = ["วันนี้สิ่งที่ทำหรือดำเนินมาก่อนหน้านี้ จะสำเร็จ",
"วันนี้อาจมีการเริ่มต้นทำสิ่งใหม่ๆ บางอย่าง ที่คิดหรือตั้งใจไว้นานแล้ว",
"วันนี้ให้มั่นใจไว้ เชื่อในความรู้ความสามารถตนเอง ก้าวสู่สิ่งใหม่",
"วันนี้ทำสิ่งใดต้องรอบคอบและ ไตร่ตรองให้ดี",
"วันนี้อาจได้รับความช่วยเหลือจากผู้มีน้ำใจ",
"จะมีข่าวดีเกี่ยวกับเรื่องการเงินเข้ามา",
"วันนี้คุณอาจมีโชคเล็กๆน้อยๆจากญาติผู้ใหญ่"
];

function play(){
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");
	setTimeout(function(){
		setFortune();
	},1000)
}

function play2(){
	cookie2.classList.remove("cookie-show");
	cookie1.classList.add("cookie-show");
	cookie1.classList.remove("cookie-show");
	cookie1.classList.remove("cookie-hide");
	cookie2.classList.remove("cookie-hide");
}

function setFortune(){
	fortune.innerText = fortuneBank[Math.floor(Math.random()*fortuneBank.length)];
	fortune.style.opacity = 1;
	fortune.style.top = "96px";
}

