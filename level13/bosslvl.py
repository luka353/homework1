def boss_level(n):
    for i in range(n):
        
        spaces = ' ' * (n - i - 1)
        
        stars = '*' * (2 * i + 1)
        
        print(spaces + stars)

boss_level(5)
