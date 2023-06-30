# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

q01 = "()"
q02 = "()[]{}"
q03 = "({[]})"
q04 = "[()]{}"
q05 = "{[}]"
q06 = "({[})"
q07 = "(]"
q08 = "["
q09 = "]"
q10 = ""
q11 = "(("
q12 = "))"
q13 = "([]))"
q14 = "{(})"
q15 = "([)]"
q16 = "{([])}"
q17 = "{{{{}}"
q18 = "(((({{))"
q19 = "{[()]"
q20 = "(())[]{}"
q_list = [q01,q02,q03,q04,q05,q06,q07,q08,q09,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20]

class Solution:
    def isValid(self, s: str) -> bool:
        openToClose = {
            ")":"(",
            "}":"{",
            "]":"[",
        }
        stacks = []
        for char in s:
            if char in openToClose:
                if stacks and stacks[-1] == openToClose[char]:
                    stacks.pop()
                else:
                    return False
                
            else:
                stacks.append(char)

        return True if len(stacks) == 0 else False


sol = Solution()
for question in q_list:
    result = sol.isValid(question)
    print(f"${question} : ${result}")

# q01: "()",        Output: True
# q02: "()[]{}",    Output: True
# q03: "({[]})",    Output: True
# q04: "[()]{}",    Output: True
# q05: "{[}]",      Output: False
# q06: "({[})",     Output: False
# q07: "(]",        Output: False
# q08: "[",         Output: False
# q09: "]",         Output: False
# q10: "",          Output: True
# q11: "((",        Output: False
# q12: "))",        Output: False
# q13: "([]))",     Output: False
# q14: "{(})",      Output: False
# q15: "([)]",      Output: False
# q16: "{([])}",    Output: True
# q17: "{{{{}}",    Output: False
# q18: "(((({{))",  Output: False
# q19: "{[()]",     Output: False
# q20: "(())[]{}",  Output: True