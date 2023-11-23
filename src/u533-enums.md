```
  _   _  ____    _   _   _   _   _   _   _   _   _   _   _ 
 | \ | |/ __ \  | | | | | | | | | | | | | | | | | | | | | |
 |  \| | |  | | | | | | | | | | | | | | | | | | | | | | | |
 | . ` | |  | | | | | | | | | | | | | | | | | | | | | | | |
 | |\  | |__| | |_| |_| |_| |_| |_| |_| |_| |_| |_| |_| |_|
 |_| \_|\____/  (_) (_) (_) (_) (_) (_) (_) (_) (_) (_) (_)

```
# String literals
  + safe with diamond dependencies (structural type)
  + type safe
  + autocomplete
  + easy to parse
  + no hidden runtime magic
  + name refactoring already here
  - having const object and types is a bit clunky

# Enums
  - problematic with diamond dependencies (nominal type)
  + type safe
  + autocomplete
  - parsing only with the help of cast
  - there is "hidden" runtime object attached to it, import unpredictable
  + name refactoring
