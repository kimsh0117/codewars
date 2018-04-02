# In this simple assignment you are given a number and have to make it negative.
# But maybe the number is already negative?

# Example:

# make_negative(1);  return -1
# make_negative(-5);  return -5
# make_negative(0);   return 0
# Notes:

# The number can be negative already, in which case no change is required.
# Zero (0) can't be negative, see examples above.

def make_negative( number ):
  if number == 0 or number < 0:
    return number
  else:
    return -number

# 기초 문법
# 파이썬에는 &&라는 연산자는 없습니다. 대신 and가 해당 기능을 대신합니다. 그 외에도 논리적 OR(||)대신 or를 쓰지요.

# 다른사람 풀이
'''
def make_negative( number ):
  return -abs(number)

def make_negative( number ):
    return -number if number > 0 else number
'''