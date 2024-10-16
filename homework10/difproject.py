def registration_form():
    users = [] 
    while True:
        print("სარეგისტრაციო ფორმა")
        username = input("შეიყვანეთ თქვენი სახელი: ")
        email = input("შეიყვანეთ თქვენი ელექტრონული ფოსტა: ")
        password = input("შეიყვანეთ თქვენი პაროლი: ")

       
        users.append({
            'username': username,
            'email': email,
            'password': password
        })

        print(f"\nმადლობა, {username}! რეგისტრაცია წარმატებით შესრულდა.\n")

        
        another = input("გნებავთ რეგისტრაცია სხვა მომხმარებლისთვის? (დიახ/არა): ")
        if another.lower() != 'დიახ':
            break

    print("\nრეგისტრირებული მომხმარებლები:")
    for user in users:
        print(f"სახელი: {user['username']}, ელექტრონული ფოსტა: {user['email']}")


registration_form()
