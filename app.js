import express from "express";
import employees from "./db/employees.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
    res.json(employees);
});

app.get("/employees/random", (req, res) => {
      const randomIndex = Math.floor(Math.random() * employees.length);
    res.json(employees[randomIndex]);
});

app.get("/employees/:id", (req, res) => {
    const id = Number(req.params.id);
    const employee = employees.find((e) => e.id === id);
    if (!employee) {
        res.status(404).json({ message: `Employee with id ${id} not found.` });
    } else {
        res.json(employee);
    }
});

export default app;
