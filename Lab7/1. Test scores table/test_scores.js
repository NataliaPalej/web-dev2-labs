const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];
let average, total, max;

const $ = (selector) => document.querySelector(selector);

const addScore = function () {
	// get user entries
	const name = $("#name").value;
    const score  = parseInt( $("#score").value );
    
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
    	alert("You must enter a name and a valid score");
    }
	else {
		names.push(name);
		scores.push(score);
		//alert that new entry successfully aded
		alert(`${name} - ${score}% successfully added`)
		console.log(`${name} - ${score}% successfully added`)
	}

	//Clear text box after adding to array
	$("#name").value = " ";
	$("#score").value = " ";
    
};

const displayResults = function () {
	//Total score 
	total = 0;
	for (let i = 0; i < scores.length; i++) {
		total = total + scores[i];
		console.log(`Scores count -> ${scores.length}`)
	}
	
	//Max score from the list
	max = scores[0];
	for (let i = 0; i < scores.length; i++) {
		Math.max(scores[i])
		max = names[i] + " - " + scores[i] + "%"
	}
	console.log(`Max score: ${max}`)

	
	//Average score from the list
	average = (total/scores.length);
	average.toFixed(2);

	console.log(`Average -> ${average}`)
	$("#results").innerHTML = `<h2>Results</h2><p>Average score: ${average}</p><p>Highest Score: ${max}</p>`;
}


const displayScores = function () {
	$("#scores_table").innerHTML = `<tr><h2>Scores</h2></tr>`
	$("#scores_table").innerHTML +=
	`<tr>
	<th>Name</th>
	<th>Score</th>
	</tr>`

	//For loop to add each entry from the list into the table
	for (let i = 0; i < scores.length; i++) {
		$("#scores_table").innerHTML += `<tr>
		<td>${names[i]}</td>
		<td>${scores[i]}%</td></tr>`
	}
}


window.addEventListener("load", () => {
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});