def squareSum():
    squareSum=0
    total1=0
    for i in range(1,101):
        squareSum=squareSum+i
    total1=squareSum*squareSum
    return total1


def sumSquare():
    sumSquare=0
    sum=0
    total2=0
    for i in range(1,101):
        sum=i*i
        sumSquare=sumSquare+sum
        sum=0
    total2=sumSquare
    return total2


def result(x, y):
    total3=x-y
    print(total3)

result(squareSum(), sumSquare())
