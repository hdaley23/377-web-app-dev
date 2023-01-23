num = 2520

def divisible(num):
    for i in range (2, 21):
        if num % i != 0:
            return False
    return True

while True:
    if divisible(num):
        break
    num = num + 2520 

print(num)