module.exports =
    function toReadable(number) {

        const _num = [
            "",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ];
        const _dozens = [
            "",
            "ten",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];
        const x_numbers = [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];
        let str_nam = "" + number;

        function one(str_nam) {
            return _num[str_nam];
        }

        function twu(str_nam) {
            const decade = Math.floor(str_nam / 10);
            if (str_nam[0] === "1") {
                return x_numbers[number % 10];
            } else {
                return `${_dozens[decade]} ${_num[str_nam % 10]}`.trim();
            }
        }

        function three(str_nam) {
            return `${one(str_nam[0])} hundred ${twu(str_nam.substring(1))}`.trim();
        }

        if (number === 0) return "zero";
        else if (str_nam.length === 1) return one(str_nam);
        else if (str_nam.length === 2) return twu(str_nam);
        else if (str_nam.length === 3) return three(str_nam);
    }

//console.log(toReadable(723));

