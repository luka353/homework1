def manual_difference(idk1, idk2):
    result = idk1.copy()
    for element in idk2:
        result.discard(element)
    return result 