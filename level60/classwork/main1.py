def is_planet_mnemonic_correct(solar_system, mnemonic):
    planets = [planet for planet in solar_system if planet != "Asteroid"]
    mnemonic_words = mnemonic.split()

    if len(planets) != len(mnemonic_words):
        return False

    for i in range(len(planets)):
        if planets[i][0] != mnemonic_words[i][0]:
            return False

    return True