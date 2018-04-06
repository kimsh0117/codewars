# Given an array of numbers, determine whether the sum of all of the numbers is odd or even.

# Give your answer in string format as 'odd' or 'even'.

# If the input array is empty consider it as: [0] (array with a zero).

# Example:

# oddOrEven([0]) returns "even"
# oddOrEven([2, 5, 34, 6]) returns "odd"
# oddOrEven([0, -1, -5]) returns "even"
from functools import reduce

def oddOrEven(arr):
    return 'even' if reduce((lambda x, y: x + y), arr) % 2 == 0 else 'odd'

#다른 사람 풀이
'''
def oddOrEven(arr):
    return 'even' if sum(arr) % 2 == 0 else 'odd'
'''