let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let arrayBtn = [];


for (var i = 1; i < 7; i++) {
	arrayBtn.push(document.getElementById(`btn${i}`));
}

for (let i = 0; i < arrayBtn.length; i++) {
	arrayBtn[i].addEventListener("click", () => {
			if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
		} else {
			tg.MainButton.setText(`You choice ${i}`);
			item = `${i}`;
			tg.MainButton.show();
		}
	})
}

Telegram.WebApp.onEvent("mainButtonClicked", () => {
	tg.sendData(item);
});


const userCard = document.getElementById("usercard")
let p = document.createElement("p");
p.innerHTML = `${tg.initDataUnsafe.first_name} ${tg.initDataUnsafe.last_name}`;

userCard.appendChild(p);


const enter = document.querySelector(".lists_products");

let href = "";


enter.addEventListener("click", () => {
	window.location.href = "file:///Users/dmitrykozir/Desktop/dunger_king/index.html";
})


// while (true) {
// 	if (window.location.href.includes("lists_products.html")) {
// 		console.log(window.location.href);
// 	} else {
// 		console.log(10);
// 	}
// }
