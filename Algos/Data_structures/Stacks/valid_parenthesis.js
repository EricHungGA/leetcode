var q01 = "()";
var q02 = "()[]{}";
var q03 = "({[]})";
var q04 = "[()]{}";
var q05 = "{[}]";
var q06 = "({[})";
var q07 = "(]";
var q08 = "[";
var q09 = "]";
var q10 = "";
var q11 = "((";
var q12 = "))";
var q13 = "([]))";
var q14 = "{(})";
var q15 = "([)]";
var q16 = "{([])}";
var q17 = "{{{{}}";
var q18 = "(((({{))";
var q19 = "{[()]";
var q20 = "(())[]{}";
var q_array = [q01, q02, q03, q04, q05, q06, q07, q08, q09, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];
var isValid = function (s) {
    var stack = [];
    var closeToOpen = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char in closeToOpen) {
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
        else {
            stack.push(char);
        }
    }
    return stack.length > 0 ? false : true;
};
for (var _i = 0, q_array_1 = q_array; _i < q_array_1.length; _i++) {
    var question = q_array_1[_i];
    console.log(isValid(question));
    console.log(question);
}
// for (const q in q_array) {
//     console.log(isValid(q))
//     console.log(q)
//     console.log(`${q} : `)
// }
// function isValid2(s:string): boolean {
//     return false
// }
