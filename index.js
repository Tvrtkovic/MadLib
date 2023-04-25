// Get form and output elements
const madlibForm = document.getElementById("madlib-form");
const storyOutput = document.getElementById("story-output");

// Add event listener to form submission
madlibForm.addEventListener("submit", function(event) {
	// Prevent default form submission
	event.preventDefault();

	// Get values from form elements
	const noun = document.getElementById("noun").value;
	const adjective = document.getElementById("adjective").value;
	const celebrity = document.getElementById("celebrity").value;
	const verb = document.getElementById("verb").value;
	const emotion = document.querySelector('input[name="emotion"]:checked').value;

	// Create story using form values
	const story = `Once upon a time, on the planet Mars, Elon Musk and Messi were exploring the red planet. Suddenly, they saw a ${noun} shaped object in the distance. They both were ${emotion} and ${verb} towards the object. As they got closer, they realized that it was a spaceship piloted by ${adjective} ${celebrity}. They were surprised to see ${celebrity} on Mars, and asked them how they got there. ${celebrity} replied, "I'm here to film my next movie!" From that day on, Elon Musk, Messi, and ${celebrity} became great friends and continued to explore Mars together.`;

	// Output story to the page
	storyOutput.innerHTML = story;
});