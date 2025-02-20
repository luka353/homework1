def solution(text, ending):
    return text.endswith(ending)

print(solution('abc', 'bc'))  
print(solution('abc', 'd'))   
print(solution('idk', 'lo')) 
print(solution('idk', 'idk'))  
print(solution('aa', 'iiio'))