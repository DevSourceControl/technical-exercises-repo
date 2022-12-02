describe("Palindrome Tests", function () {
    it("should identify that a word is palindrome", function () {
        chai.assert.strictEqual(palindrome("noon"), true);
    });

    it("should identify that a word is not palindrome", function () {
        chai.assert.strictEqual(palindrome("walter"), false);
    });

    it("should identify that a number is palindrome", function () {
        chai.assert.strictEqual(palindrome(1881), true);
    });

    it("should identify that a number is not palindrome", function () {
        chai.assert.strictEqual(palindrome(123456), false);
    });

    it("should identify that a sentence is palindrome", function () {
        chai.assert.strictEqual(palindrome("Able was I ere I saw Elba"), true);
    });

    it("should identify that a sentence is not palindrome", function () {
        chai.assert.strictEqual(palindrome("This is a test"), false);
    });

    it("should identify that a string is palindrome with punctuation", function () {
        chai.assert.strictEqual(palindrome("A man, a plan, a canal, Panama!"), true);
    });

    it("should identify that a string with punctuation is not a palindrome", function () {
        chai.assert.strictEqual(palindrome("A man, a canal, Panama!"), false);
    });

    it("should identify an UPPERCASE string is a palindrome", function () {
        chai.assert.strictEqual(palindrome("MADAM"), true);
    });

    it("should identify an UPPERCASE string is not a palindrome", function () {
        chai.assert.strictEqual(palindrome("SIR"), false);
    });

    it("should identify a string with varied casing is a palindrome", function () {
        chai.assert.strictEqual(palindrome("ReVivER"), true);
    })

    it("should identify a string with varied casing is not a palindrome", function () {
        chai.assert.strictEqual(palindrome("LeTteRS"), false);
    });

});

describe("Roman Numeral Tests", function () {
    it("should work with the test data", function () {
        chai.assert.strictEqual(romanNumerals(39), 'XXXIX', '39 should return XXX + IX = XXXIX.')
        chai.assert.strictEqual(romanNumerals(246), 'CCXLVI', '246 should return CC + XL + VI = CCXLVI.')
        chai.assert.strictEqual(romanNumerals(789), 'DCCLXXXIX', '789 should return DCC + LXXX + IX = DCCLXXXIX.')
        chai.assert.strictEqual(romanNumerals(2421), 'MMCDXXI', '2421 should return MM + CD + XX + I = MMCDXXI.')
    });

    it("should work with secondary test data", function () {
        chai.assert.strictEqual(romanNumerals(1776), 'MDCCLXXVI', '1776 should return "MDCCLXXVI"')
        chai.assert.strictEqual(romanNumerals(1918), 'MCMXVIII', '1918 should return "MCMXVIII"')
        chai.assert.strictEqual(romanNumerals(1954), 'MCMLIV', '1954 should return "MCMLIV"')
        chai.assert.strictEqual(romanNumerals(2007), 'MMVII', '2007 should return "MMVII"')
        chai.assert.strictEqual(romanNumerals(2008), 'MMVIII', '2008 should return "MMVIII"')
    });

    it("should not return answer for negative value", function () {
        chai.assert.strictEqual(romanNumerals(-1), '', 'Please provide a postive value')
        chai.assert.strictEqual(romanNumerals(-5), '', 'Please provide a postive value')
        chai.assert.strictEqual(romanNumerals(-10), '', 'Please provide a postive value')
        chai.assert.strictEqual(romanNumerals(-100), '', 'Please provide a postive value')
    });

    it("should not return answer for zero values", function () {
        chai.assert.strictEqual(romanNumerals(0), '', 'Please provide a non zero value')
    });

    it("should correctly return for prefix and postfix", function () {
        chai.assert.strictEqual(romanNumerals(8), 'VIII', '8 should retun "VIII"')
        chai.assert.strictEqual(romanNumerals(9), 'IX', '9 should retun "IX"')
    });
});

describe("Fibonacci Tests", function () {
    it("should return 0 for anything less than 1", function () {
        chai.assert.strictEqual(fibonnaci(0), '0', "Should return zero");
    });

    it("should return error message for values over 500", function () {
        chai.assert.strictEqual(fibonnaci(501), "Limit is n = ±500", "Should return error message");
    });

    it("should return an output when a positive value is entered", function () {
        chai.assert.strictEqual(fibonnaci(3), "F3 = F0+F1+F2\nF3 = 1 + 1\nF3 = 2\n", "Should return output");
    });

    it("should return value for 5", function () {
        chai.assert.strictEqual(fibonnaci(5), "F5 = F0+F1+F2+F3+F4\nF5 = 3 + 2\nF5 = 5\n", "Should return correct output");
    });
   
    it("should return value for 6", function () {
        chai.assert.strictEqual(fibonnaci(6), "F6 = F0+F1+F2+F3+F4+F5\nF6 = 5 + 3\nF6 = 8\n", "Should return correct output");
    });

    it("should return value for 9", function () {
        chai.assert.strictEqual(fibonnaci(9), "F9 = F0+F1+F2+F3+F4+F5+F6+F7+F8\nF9 = 21 + 13\nF9 = 34\n", "Should return correct output");
    });

    it("should return value for 15", function () {
        chai.assert.strictEqual(fibonnaci(15), "F15 = F0+F1+F2+F3+F4+F5+F6+F7+F8+F9+F10+F11+F12+F13+F14\nF15 = 377 + 233\nF15 = 610\n", "Should return matching output");
    });

    it("show correct answer for 25", function () {
        chai.assert.strictEqual(fibonnaci(25), "F25 = F0+F1+F2+F3+F4+F5+F6+F7+F8+F9+F10+F11+F12+F13+F14+F15+F16+F17+F18+F19+F20+F21+F22+F23+F24\nF25 = 46368 + 28657\nF25 = 75025\n", "Should return the correct output");
    });
});

describe("Coin Change Tests", function () {
    it("should return empty string for 0", function () {
        chai.assert.strictEqual(coinChange(0), '', "Should return an empty string");
    });

    it("should return correct output for 1p", function () {
        chai.assert.strictEqual(coinChange(1), "1x 1p\n", "Should return change for 1p");
    });

    it("should return correct output for 39p", function () {
        chai.assert.strictEqual(coinChange(39), "1x 20p\n1x 10p\n1x 5p\n2x 2p\n", "Should return change for 39p");
    });
   
    it("should return correct output for 100", function () {
        chai.assert.strictEqual(coinChange(100), "1x 100p\n", "Should return change for 100p");
    });

    it("should return correct output for 1050", function () {
        chai.assert.strictEqual(coinChange(1050), "10x 100p\n1x 50p\n", "Should return correct change");
    });

    it("should scale up for larger amounts", function () {
        chai.assert.strictEqual(coinChange(10500), "105x 100p\n", "Should return correct change");
    });
});

