def is_isogram(string):
    string = string.lower()
    seen = set()
    
    for char in string:
        if char in seen:
            return False
        seen.add(char)
    
    return True