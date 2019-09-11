function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>There once was a maintainer on gitTub</p>",
"<p onClick=nextLine(2)>So many requests for spoons they did snub</p>",
"<p onClick=nextLine(3)>So I forked the backpack</p>",
"<p onClick=nextLine(4)>Now they all send <em>me</em> quarters, d'oh!</p>",
"<p onClick=nextLine(0)>Said the maintainer, 'Welcome to the Colosseum!'</p>");

	document.getElementById("line").innerHTML=poem[line];
}
