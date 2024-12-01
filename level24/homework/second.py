def my_join(arr, delimiter=" "):
    result = ""
    
    for i, word in enumerate(arr):
        result += word
        if i != len(arr) - 1:
            result += delimiter
    
    return result

words = ["hello", "world", "python"]
print(my_join(words))
