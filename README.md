## Features of this project

- Dynamically added the data on the card from the JSON file
- Click to select the course on the cart
- Calculate the credits and remaining credits and total price

## Managed the state of the project

> `useEffect()` use for fetch the data from json file.
> `const [cards, setCards] =  useState([]);` in the state set the data that is found from json data.

> `const [carts, setCarts] =  useState([]);` with this state pass to course name to cart.

> `const [remaining, setRemaining] =  useState(20);` with this state set the initial remaining value and calculate the value when purchasing the course.

> `const [credits, setCredits] =  useState(0);` with this state calculate the total credits on the cart.

> `const [price, setPrice] =  useState(0);` with this state setup the total price for the course is on the cart.