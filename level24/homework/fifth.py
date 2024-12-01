def collect_words():
    words = []
    while True:
        word = input("Enter a word (or type 'stop' to end): ")
        if word.lower() == "stop":
            break
        words.append(word)
    
    result = my_join(words)
    print("Joined words: ", result)

collect_words()
