
elements = []
for i in range(4):
    element = input(f"შეიტანეთ ელემენტი #{i + 1}: ")
    elements.append(element)


elements.append("Extra Element")


for element in elements:
    print(element)
