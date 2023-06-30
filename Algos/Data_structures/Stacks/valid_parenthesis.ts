const q01:string = "()"
const q02:string = "()[]{}"
const q03:string = "({[]})"
const q04:string = "[()]{}"
const q05:string = "{[}]"
const q06:string = "({[})"
const q07:string = "(]"
const q08:string = "["
const q09:string = "]"
const q10:string = ""
const q11:string = "(("
const q12:string = "))"
const q13:string = "([]))"
const q14:string = "{(})"
const q15:string = "([)]"
const q16:string = "{([])}"
const q17:string = "{{{{}}"
const q18:string = "(((({{))"
const q19:string = "{[()]"
const q20:string = "(())[]{}"

const q_array:string[] = [q01,q02,q03,q04,q05,q06,q07,q08,q09,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20]

const isValid: (s:string) => boolean = (s:string) => {
    let stack:string[] = []
    let closeToOpen:object = {
        ")":"(",
        "}":"{",
        "]":"[",
    }
    for (const char of s) {
        if (char in closeToOpen) {
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(char)
        }
    }
    return stack.length > 0 ? false : true
}

for (const question of q_array) {
    console.log(isValid(question))
    console.log(question)
}

// for (const q in q_array) {
//     console.log(isValid(q))
//     console.log(q)
//     console.log(`${q} : `)
// }

// function isValid2(s:string): boolean {
//     return false
// }
