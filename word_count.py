

word = input("Enter word below: ")

set_val = set(word)

count = 0

out_put = {}

for y in set_val:
	for z in word:

		if y == z:
			count += 1	
	
	out_put[y] = count

	count = 0

print(out_put)


