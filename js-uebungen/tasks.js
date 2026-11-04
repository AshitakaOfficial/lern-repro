const tasks = [
    { id: 1, title: "Einkaufen", erledigt: false},
    { id: 2, title: "Putzen", erledigt: true},
    { id: 3, title: "Steuer", erledigt: false}
];

const neueAufgabe = neueAufgabeTitel => {
    const aufgabe = {
        id: tasks.length + 1,
        title: neueAufgabeTitel,
        erledigt: false
        };
    tasks.push(aufgabe);
    return aufgabe;
}

// const offeneAufgaben = tasks.filter((task) => task.erledigt !== true);
// console.log(offeneAufgaben)


function offeneAufgaben(aufgabenListe) {
	const gefilterteAufgaben = aufgabenListe.filter((task) => task.erledigt === false);
	return gefilterteAufgaben;
	}

// Alternative Lösung
// function offeneAufgaben(aufgabenListe) {
//  return aufgabenListe.filter((task) => task.erledigt === false);
// }

// const ergebnis = offeneAufgaben(tasks);
// console.log(ergebnis)

function alleTitel (aufgabenMapping) {
    return aufgabenMapping.map((task) => task.title)
}

const ergebnisMap = alleTitel(tasks)

// console.log(ergebnisMap)

function findeAufgabe (aufgaben, id) {
    return aufgaben.find((task) => task.id === (id))
}
const ergebnisFind = findeAufgabe(tasks, 1)
const ergebnisFindUndefined = findeAufgabe (tasks, 99)
console.log(ergebnisFind)
console.log(ergebnisFindUndefined)