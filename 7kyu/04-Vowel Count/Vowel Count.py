# -*- coding: utf-8 -*- 
# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, and u as vowels for this Kata.

# The input string will only consist of lower case letters and/or spaces.
'''
lst = ['a', 'b', 'c']

if 'a' in lst:
    print('포함')
else:
    print('미포함')
'''
def getCount(inputStr):
    num_vowels = 0
    asc = [97,101,105,111,117]
    for i in inputStr:
        if ord(i) in asc:
            num_vowels += 1
    return num_vowels

# 다른사람 코드
'''
def getCount(inputStr):
    return sum(1 for let in inputStr if let in "aeiouAEIOU")
'''
