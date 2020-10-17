// const express = require("express");
// const request = require("request");

// const app = express();

// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	next();
// });

// app.get("/orders", (req, res) => {
// 	request(
// 		{
// 			url:
// 				"https://10f281bfc341a3094260ffaed69883e3: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@goldana-marketplace.myshopify.com/admin/api/2020-10/orders.json?fields=created_at,id,email,name,total-price,line_items",
// 		},
// 		(error, response, body) => {
// 			if (error || response.statusCode !== 200) {
// 				return res.status(500).json({ type: "error", message: err.message });
// 			}

// 			res.json(JSON.parse(body));
// 		},
// 	);
// });

// const PORT = 8080;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));


const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(
	"/orders",
	createProxyMiddleware({
		target:
			"https://10f281bfc341a3094260ffaed69883e3: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@goldana-marketplace.myshopify.com/admin/api/2020-10/orders.json?fields=created_at,id,email,name,total-price,line_items", //original url
		changeOrigin: true,
		//secure: false,
		onProxyRes: function (proxyRes, req, res) {
			proxyRes.headers["Access-Control-Allow-Origin"] = "*";
		},
	}),
);
app.listen(5000);