database = {}

def AddToDatabase(name, surname, age):
    database["name"] = name
    database["surname"] = surname
    database["age"] = age
    print(f"Added to database: {database}")

AddToDatabase("ლუკა", "ციხელაშვილი", 14)