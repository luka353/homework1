class MyCat:
    def __init__(self, value):
        self.value = value

    def __repr__(self):
        return "კატა"

cat = MyCat("კატა")
print(cat)