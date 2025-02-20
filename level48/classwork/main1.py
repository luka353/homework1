def find_short(s):
    words = s.split()
    shortest = min(len(word) for word in words)
    return shortest

print(find_short("bitcoin take over the world maybe who knows perhaps")) 
print(find_short("turns out random test cases are easier than writing out basic ones"))
print(find_short("Let's travel abroad shall we"))