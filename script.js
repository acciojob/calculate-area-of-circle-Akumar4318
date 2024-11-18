 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:"); 
            // write you code here and display the result to the user

	 let area=radius* radius*Math.PI;
	 
	 let area1=area.toFixed(2)

	 alert(`The area of a circle with radius ${radius} is ${area1}`)
	 
           
}
calculateArea();
