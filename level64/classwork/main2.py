class Human:
    def __init__(self, name, surname, age):
        self.name = name
        self.surname = surname
        self.age = age

    def __str__(self):
        return f"{self.name} {self.surname}, ასაკი: {self.age}"

    def get_name(self):
        return self.name

    def get_surname(self):
        return self.surname

person = Human("ვინმე", "არვიცი", 33)
print(person)
print(person.get_name())
print(person.get_surname())