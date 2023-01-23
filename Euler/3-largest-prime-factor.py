primeFactor = 1
i = 2
num = 600851475143

while i <= num / i:
    if num % i == 0:
        primeFactor = i
        num /= i
    else:
        i += 1

    if primeFactor < num: 
        primeFactor = int(num)


print(primeFactor)
    

