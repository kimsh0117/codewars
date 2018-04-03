# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: array may be empty, in this case return 0.

def positive_sum(arr):
  result = 0
  if len(arr) == 0:
    return 0
  else:
    for i in arr:
      if i > 0:
        result += i
  return result

# 다른사람 풀이
'''
def positive_sum(arr):
    return sum(x for x in arr if x > 0)

def positive_sum(arr):
    return sum(filter(lambda x: x > 0,arr))
'''