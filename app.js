require('dotenv').config();
const express = require('express');
const axios = require("axios");

const url = "https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365217597010/reports/TrialBalance?"
const app = express();



// middleware 
// app.use(express.json()) 

// send request url --> response 


app.get('/', async (req,res) => {
	try
	{
		const { data } = await axios.get( url ,
			{ headers: { Authorization:`Bearer ${process.env.ACCESS_TOKEN}` } }
		)
		res.status(200).json({ data });
	}catch(err)
	{
		console.log(err)
	}
	
})

/*app.post('/', (req,res) => {
	const { email , password } = req.body ;
	console.log(email,password)
	// creat item
	res.send(`name = ${email} password = ${password}`); 
})
*/

const port = process.env.PORT || 5000 ;


app.listen(port , () => {
	console.log(`server is listen in port ${port}`);
})