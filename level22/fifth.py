list_of_items = ["apple", "banana", "apple", "orange"]
item_to_remove = "apple"
count = list_of_items.count(item_to_remove)
list_of_items.remove(item_to_remove)
print(f"{item_to_remove} ჩნდება {count} ჯერ.")
print("განახლებული სია:", list_of_items)