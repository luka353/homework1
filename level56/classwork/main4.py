def solve(s):
    upper = 0
    lower = 0
    for c in s:
        if c.isupper():
            upper += 1
        else:
            lower += 1
    if lower >= upper:
        return s.lower()
    else:
        return s.upper()