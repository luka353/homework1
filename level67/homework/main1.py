class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

dog1 = Dog("Buddy", 3)
dog2 = Dog("Charlie", 5)

print(f"Dog 1: {dog1.name}, Age: {dog1.age}")
print(f"Dog 2: {dog2.name}, Age: {dog2.age}")
