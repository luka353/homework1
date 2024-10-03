
a = 5  # შეგიძლიათ შეცვალოთ ნებისმიერი მთელი რიცხვით
b = 3  # შეგიძლიათ შეცვალოთ ნებისმიერი მთელი რიცხვით
c = 7  # შეგიძლიათ შეცვალოთ ნებისმიერი მთელი რიცხვით


is_a_greatest = (a > b) and (a > c)


is_b_middle = (b > min(a, c)) and (b < max(a, c))


is_c_least = (c < a) and (c < b)


print("is_a_greatest:", is_a_greatest)
print("is_b_middle:", is_b_middle)
print("is_c_least:", is_c_least)
