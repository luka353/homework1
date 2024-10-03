grade = int(input("შეიყვანეთ ნიშანი (1-10): "))

# ცვლადების შექმნა
is_A = grade >= 9
is_B = 8 <= grade < 9
is_C = 7 <= grade < 8
is_D = 6 <= grade < 7
is_F = grade < 6

# ცვლადების დამაბეჭდვა
print("is_A:", is_A)
print("is_B:", is_B)
print("is_C:", is_C)
print("is_D:", is_D)
print("is_F:", is_F)