def even_squares(numbers):
    return list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numbers)))