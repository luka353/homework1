def is_isogram(string):
    return len(string) == len({c.lower() for c in string})