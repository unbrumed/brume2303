const State_AzazGift3 = {
	accumulate: 0,
	print: null,
	frequency: 12000
}

function AzazGift3(dt) {
	State_AzazGift3.accumulate += dt;

	if (!State_AzazGift3.print) {
		State_AzazGift3.print = document.querySelector('#bobik');
	}

	if (State_AzazGift3.accumulate >= State_AzazGift3.frequency ) {
		const curr = parseInt(State_AzazGift3.print.innerHTML);
		//const nw = curr + Math.round(State_AzazGift3.accumulate / 1000);
		const nw = curr + 1;
		State_AzazGift3.accumulate -= State_AzazGift3.frequency ;
		State_AzazGift3.print.innerHTML = nw;
	}
}

function loop(bb, timestampA) {
	if (!bb.active) {
		return;
	}

	const timestampB = Date.now();
	const dt = timestampB - timestampA;
	AzazGift3(dt);

	requestAnimationFrame(() => loop(bb, timestampB));
}

function run(bb) {
	bb.active = true;
	const dt = 0;
	const timestamp = Date.now();

	loop(bb, timestamp);
}

function stop(bb) {
	bb.active = false;
}

function main() {
	const bb = {
		active: true
	}
	run(bb);
}

main();
