const express = require("express");
const app = express();
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const users = [
	{
		name: "aashrika",
		password: "talentedprogrammer",
		email: "aashrikachand@gmail.com",
		id: "132d06b3-8cb6-40d9-8b61-3cf486b206ca",
	},
];

app.post("/signUp", async (req, res) => {
	try {
		const id = uuidv4();
		const user = {
			name: req.query.name,
			password: req.query.password,
			email: req.query.email,
			id: id,
		};
		users.push(user);
		res.status(201).send({ message: "User Created", id: id });
	} catch {
		res.status(500).send("User Not created");
	}
});

app.get("/signIn", async (req, res) => {
	const user = users.find((user) => user.name === req.query.name);
	if (user == null) {
		return res.status(400).send("Cannot find user");
	}
	try {
		if (req.query.password == user.password) {
			res.send({ message: "Logged In", id: user.id });
		} else {
			res.send("Incorrect Password");
		}
	} catch {
		res.status(500).send();
	}
});

app.listen(4000);
