def lottery(s):
    r = ''
    for c in s:
        if c >= '0' and c <= '9':
            if c not in r:
                r += c
    if r == '':
        return "One more run!"
    return r