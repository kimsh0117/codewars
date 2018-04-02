# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

def bool_to_word(boolean):
    return "Yes" if boolean == True else "No"

# 다른 사람 풀이
'''
def bool_to_word(bool):
    return ['No', 'Yes'][bool]
'''