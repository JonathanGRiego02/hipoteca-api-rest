import express, {Express, Request, Response}  from "express";

const app : Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Soy el servidor");
});

app.get("/hello", (req: Request, res: Response) => {
    const name = req.query.name ? req.query.name : "desconocido";
    const greeting = {
        message: `Hola ${name}, estamos aprendiendo algo de Node.js + Express`,
        data: new Date()
    }
    res.status(200);
    res.type('application/json');
    res.send(greeting);
});

app.get("/add", (req: Request, res: Response) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    const sum = {
        suma: `${num1 + num2}`
    }
    res.json(sum)
    res.send()
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
