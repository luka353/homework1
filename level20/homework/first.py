
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

vowels = ['a', 'e', 'i', 'o', 'u']

vowel_count = sum(1 for letter in letters if letter in vowels)

print("ხმოვნების რაოდენობა:", vowel_count)
