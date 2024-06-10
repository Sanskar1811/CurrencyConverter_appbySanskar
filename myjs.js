function convert()
{
	event.preventDefault();
	let amt = document.getElementById("amt");
	
	if (amt.value == "")
	{
		alert("Please enter any amount");
		amt.focus();
		return ;
	}
	let a = parseFloat(amt.value);
	url = "https://api.exchangerate-api.com/v4/latest/USD";
	fetch(url)
	.then(res => res.json())
	.then(data => {
		let dollars = data.rates.INR ;
		let rupees = a * dollars ; 
		let ans = "\u20B9" + rupees.toFixed(2);
		alert("Amount in Rupees = " + ans ) ; 
		amt.value = "";
 })
	.catch(err => alert("issue " + err));
}