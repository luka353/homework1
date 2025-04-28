class Student:
    def __init__(self, name, grade, subject):
        self.name = name
        self.grade = grade
        self.subject = subject

    def introduce(self):
        print(f"My name is {self.name}, I study {self.subject} and my grade is {self.grade}.")

student = Student("Giorgi", 10, "Math")
student.introduce()