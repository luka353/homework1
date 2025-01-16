def manual_difference(idk1, idk2):
    result = idk1.copy()
    for item in idk2:
        if item in result:
            result.remove(item)
    return result