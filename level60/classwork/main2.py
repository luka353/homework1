def max_possible_score(points, seen):
    total_score = 0

    for question, point in points.items():
        if question in seen:
            total_score += point * 2
        else:
            total_score += point

    return total_score