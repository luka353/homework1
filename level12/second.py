
numbers = [9, 5, 94, 711, 52, 96, 71, 8, 12, 45]


smallest = numbers[0]  


for number in numbers:
    if number < smallest:
        smallest = number  

print(f"ყველაზე პატარა ციფრია: {smallest}")
