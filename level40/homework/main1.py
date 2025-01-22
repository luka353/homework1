def stray(arr):
    from collections import Counter
    counts = Counter(arr)
    for num, count in counts.items():
        if count == 1:
            return num