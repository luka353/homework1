def captainjack():
    gold_coin = int(input("მონეტების რაოდენობა: "))
    if gold_coin == 0:
        print("აჯანყება! მონეტა ნულია. (წადი იმუშავე)")
        return

    ships = [150, 200, 250, 300, 350]
    choice = int(input("აირჩიე გემი (1-5): "))
    if 1 <= choice <= 5:
        price = ships[choice - 1]
        if gold_coin >= price:
            print(f"გემი ნაყიდია {price} მონეტად.")
        else:
            print(f"აჯანყება! გემი ღირს {price} და შენ გაქვს {gold_coin}.")
    else:
        print("არასწორი არჩევანია! აჯანყება!")