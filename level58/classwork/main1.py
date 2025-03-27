def longest_word(string_of_words):
    words = string_of_words.split()
    longest = ""
    for word in words:
        if len(word) >= len(longest):
            longest = word
    return longest