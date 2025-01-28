def to_binary(age):
    binary_representation = ''
    while age > 0:
        binary_representation = str(age % 2) + binary_representation
        age = age // 2
    return binary_representation

age = 15 
print(to_binary(age))