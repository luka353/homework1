def password(st):
    if len(st) < 8:
        return False
    
    has_upper = False
    has_lower = False
    has_digit = False
    
    for c in st:
        if c.isupper():
            has_upper = True
        if c.islower():
            has_lower = True
        if c.isdigit():
            has_digit = True
    
    return has_upper and has_lower and has_digit