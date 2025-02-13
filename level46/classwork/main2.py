def descending_order(num):
    digits = [int(digit) for digit in str(num)]
    for i in range(len(digits)):
        for j in range(i + 1, len(digits)):
            if digits[i] < digits[j]:
                digits[i], digits[j] = digits[j], digits[i]
    return int(''.join(map(str, digits)))