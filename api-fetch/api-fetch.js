const express = require('express')
const app = express();
const request = require("request");
const cors = require("cors");
const port = 5000;
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());

const api = process.env.SHOPIFY_API_KEY
const password = process.env.SHOPIFY_API_PASSWORD;
const store = process.env.SHOPIFY_STORE_SOURCE;

app.get("/orders", (req, res) => {
	request(
		{
			url:
				`https://${api}:${password}@${store}?status=any&fields=created_at,id,email,name,currency,total-price,line_items,customer,financial_status`,
		},
		(error, response, body) => {
			if (error || response.statusCode !== 200) {
				return res.status(500).json({ type: "error", message: error.message });
			}

			res.json(JSON.parse(body));
		},
	);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});