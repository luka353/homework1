def print_patterns():
    pattern1 = [
        "******",
        "******",
        "******"
    ]
    
    pattern2 = [
        "     *",
        "    ***",
        "  *******",
        "***********"
    ]
    
    pattern3 = [
        "     *",
        "     *"
    ]
    
    pattern4 = [
        "*******",
        " *******",
        "  ********",
        "    ********"
    ]
    
    for _ in range(120):
        print("\n".join(pattern1))
        print("\n".join(pattern2))
        print("\n".join(pattern3))
        print("\n".join(pattern4))
        print("\n" + "-"*20)

print_patterns()
