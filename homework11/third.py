result = 0
for i in range(5):
    number = float(input(f"შეიყვანეთ რიცხვი {i + 1}: "))
    result += number

average = result / 5
print(f"საშუალო არითმეტიკულია: {average}")
