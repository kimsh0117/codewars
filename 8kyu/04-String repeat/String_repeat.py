# -*- coding: utf-8 -*- 
# Write a function called repeatStr which repeats the given string string exactly n times.

# repeatStr(6, "I") // "IIIIII"
# repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

def repeat_str(repeat, string):
  return string * repeat

repeat_str(6, 'I')

# 다른사람 풀이
'''
def repeat_str(repeat, string):
    solution = ""
    for i in range(repeat):
        solution += string
    return solution
'''
