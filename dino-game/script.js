const dino = document.querySelector('.dino');//seleciona o elemento dino
const background = document.querySelector('.background');
let isJumping = false;
let position = 0; // usa o let para mudar a posição, e 0 indicando a posição inicial
//console.log(dino); para verificar se o elemento funciona

function handleKeyUp(event) {
	if (event.keyCode === 32) {
		console.log('Pressionou espaço!');
		if (!isJumping) {
			jump();
		}
	}

}

function jump() {
	isJumping = true;

	let upInterval = setInterval(() => {
		if (position >= 150) {
			clearInterval(upInterval);

			//Descendo
		let downInterval = setInterval(() => {
			if (position <= 0) {
				clearInterval(downInterval); // limpar intervalo de decida para o dino parar de descer 
				isJumping = false;
			} else { 
				position -= 20;
				dino.style.bottom = position + 'px';
			}
		}, 20);//intervalo de decida
		} else {
			//Subindo
		position += 20;
		dino.style.bottom = position +'px';
		}	
	}, 20); // a cada 20 milisegundos
}

function createCactus() {
	const cactus = document.createElement('div');
	let cactusPosition = 1000;
	let randomTime = Math.random() * 6000;
	
	cactus.classList.add('cactus');
	cactus.style.left = 1000 +'px';
	background.appendChild(cactus);

	let leftInterval = setInterval(() => {
		if(cactusPosition < -60) {
			clearInterval(leftInterval);
			background.removeChild(cactus);
		} else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
			// Game Over
			clearInterval(leftInterval);
			document.body.innerHTML ='<h1 class = "game-over">Fim de jogo</h1>';
		} else {
			cactusPosition -= 10;
		cactus.style.left = cactusPosition + 'px';
	}
	}, 20);

	setTimeout(createCactus, randomTime);
}


createCactus(); //Para que quando o jogo começa ja tenha o cacto. 
document.addEventListener('keyup', handleKeyUp);