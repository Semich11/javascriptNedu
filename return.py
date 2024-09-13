def pablo(number):
	number = 1+1

print(pablo(1))

def pablo(collect):
	print(collect)

pablo("What is your name?")


print("Christopher")

def chris(*args):
	print(args)

chris("escobar", 12, 34, "ffg")


def semi(name, age):
	print(name, ":", age)



semi( age = 33, name = "c21")



def semicolon(**kwargs):
	print(kwargs)


semicolon( age = 33, name = "c21", height = 7)




array = [3] * 4
print(array)

doubleArray = [ [n for n in range(4) ] for n in range(4)]

#doubleArray = [ array for n in range(4)]


print(doubleArray)

doubleArray[1][0] = 10

print(doubleArray)






















