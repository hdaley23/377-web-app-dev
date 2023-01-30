import math
total = 0 

def checkPrime(num):
    for i in range(2,int(math.sqrt(num))+1):
        if (num % i == 0):
            return False
    return True


for i in range(2,2000000):
    if checkPrime(i):
        total += i

print(total)