class Cat:
    def meow(self):
        print("meow") 

class Dog(Cat):
    def bark(self):
        print("woof") 

cat = Cat()
cat.meow()

dog = Dog()
dog.bark()
dog.meow()