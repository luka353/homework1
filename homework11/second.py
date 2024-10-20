start = int(input("შეიყვანეთ დიაპაზონის დასაწყისი: "))
end = int(input("შეიყვანეთ დიაპაზონის დასასრული: "))

multiples = [num for num in range(start, end + 1) if num % 2 == 0 and num % 3 == 0]

print("ეს ციფრები არის 3-ისა და 2-ის ჯერადები:" if multiples else "არვიცი")
for num in multiples:
    print(num)
