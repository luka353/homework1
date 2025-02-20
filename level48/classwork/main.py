def xo(s):
    s = s.lower()
    return s.count('x') == s.count('o')

print(xo("ooxx"))  
print(xo("xooxx"))  
print(xo("ooxXm"))  
print(xo("zpzpzpp"))  
print(xo("zzoo"))