def my_split(string, delimiter=" "):
    result = []
    temp = ""
    
    for char in string:
        if char == delimiter:
            result.append(temp)
            temp = ""
        else:
            temp += char
    
    if temp:  
        result.append(temp)
    
    return result

text = "hello world"
print(my_split(text))
