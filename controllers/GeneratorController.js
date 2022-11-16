
module.exports = class GeneratorController {
    static async generate(req, res) {

        let qty = 0;
        let max = 0;

        if (req.params.type === "megasena") {
            qty = 6;
            max = 60;
        }
        else if (req.params.type === "quina") {
            qty = 5;
            max = 80;
        }
        else if (req.params.type === "lotofacil") {
            qty = 15;
            max = 25;
        }
        else if (req.params.type === "lotomania") {
            qty = 50;
            max = 100;
        }

        let game = [];
        let num = 0;
        for (let i = 1; i <= qty; i++) {

            num = Math.floor(Math.random() * max + 1);
            console.log(num);

            if (!game.includes(num))
                game.push(num);
            else
                i--;
        }

        res.status(200).json({
            game: game.sort(function (a, b) {

                return a - b;

            }),
        });
    }
}