import math
prime = []

def checkPrime(num):
    for i in range(2,int(math.sqrt(num))+1):
        if (num % i == 0):
            return False
    return True


for i in range(2,105000):
    if checkPrime(i):
        prime.append(i)

print(prime[10000])
