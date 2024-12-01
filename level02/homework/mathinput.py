print("შეიყვანეთ პირველი რიცხვი")
first = int(input())
print("შეიყვანეთ + - * ან /")
y = input()
print("შეიყვანეთ მეორე რიცხვი")
second = int(input())

if y == "*":
    x = first * second
if y == "/":
    x = first / second
if y == "+":
    x = first + second
if y == "-":
    x = first - second
print("პასუხი:",x)