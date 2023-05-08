## UNIT TESTS
1.	=> Expect multiplication (6, 3) to be a number
	=> Expect multiplication(6, 3) to be equal to 18
	=> Expect addition ("a", 3) to be an error
2.	=> Expect concatOdds([2,2,3,4],[9,1,3,2,-8]) to contain two arrays of integers
	=> Expect concatOdds([],[]) to return a single array of odd numbers in ascending order, from both of the arrays.
	=> Expect concatOdds([2,3,a],[9,b,3,-8])  to be an error
	=> Expect concatOdds([2,3,3],[9,5,3,-8])  => [-8,2,3,5,9]

## FUNCTIONAL TESTS
	=> allows a user to check out as a guest (without an account), or as a logged-in user
	=> allow user create an account if none exist
	=> allow user to log in as guest
	=> if cart is empty warn user
	=> ask user to if they want to add more items
