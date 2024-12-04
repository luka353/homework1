def draw_triangle(index):
    rows = 5
    triangle = ""
    
    for i in range(1, rows + 1):
        triangle += " " * (rows - i) + "*" * (2 * i - 1) + "\n"
    
    if index % 2 == 1:
        color = "მწვანე (green)"
    else:
        color = "ლურჯი (blue)"
    
    print(f"{color} სამკუთხედის ინდექსი {index}:\n{triangle}\n")

for i in range(120):
    draw_triangle(i)
