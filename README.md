# Rizzo's Pizza #
### An exercise using constructors and prototypes in object-oriented programming | 06.16.17 ###

By Max Scher

## Description ##
This website is for a pizza company, where a user can choose one or more individual toppings and a size to order a pizza and see the final cost.

## Setup ##
* Copy url from main repository page.
* In terminal, on Desktop:
  * $ git clone https://github.com/maxobaxo/order-pizza
  * cd order-pizza
  * open index.html

## Specifications ##
1. It can receive and store the customer's order details in an object.
  * Input: Large Cheese w/ Pepperoni
  * Output: newOrder = {size: large, toppings: pepperoni}
2. It can calculate a price based on the customer's selections.
  * Input: Large Cheese w/ Pepperoni
  * Output: Price: $8.00
3. It can return an order confirmation including customer selections along with price
  * Input: Large Cheese w/ Pepperoni
  * Output: You have ordered a Large Cheese Pizza w/ Pepperoni. Your total is $8.00
4. It can accomplish the previous specifications for multiple pizzas, keeping track of multiple pizzas in one order.
  * Input 1: Large Cheese w/ Pepperoni
  * Input 2: Small (no cheese) w/ Olives and Anchovy
  * Output: [[size: large, toppings: [cheese, pepperoni], price: $8.00], [size: small, toppings: [olives, anchovy], price: $12.00]]
5. It can calculate the total price of the order based on multiple pizzas in one order.
  * Input 1: Large Cheese w/ Pepperoni
  * Input 2: Small (no cheese) w/ Olives and Anchovy
  * Output: "That'll be 20 bucks!"

## Languages Used ##
Git, HTML, CSS, JavaScript

## License Information ##
This application is licensed under the MIT license.

Copyright (c) Max Scher 2017
