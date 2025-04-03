def count_arara(n):
    adak_count = n // 2
    anane_count = n % 2
    return " ".join(["adak"] * adak_count + ["anane"] * anane_count)

print(count_arara(3))
print(count_arara(8))
print(count_arara(5))