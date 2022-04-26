# Making impossible states impossible: typescript edition

"Making impossible states impossible" is an idea on how to tame code complexity by making invalid application states not representable on type level. Fewer variations of the state you have, less thinking must be done around them and fewer bugs appear in your program.
This idea is more known in some functional programming languages with more advanced type systems, but it's totally doable in typescript with the help of discriminated unions.
This talk will be in two parts - at first, I will give the basics of typescript unions and how they work.
In the second part, I will present some real code examples of how this technique might make your code simpler.
