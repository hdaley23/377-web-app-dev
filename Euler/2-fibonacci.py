limit = 4000000
term1 = 0
term2 = 1
total = 0
result = 0

while term2 < limit:
    total = term1 + term2
    
    if (total % 2==0):
        result += total
    term1 = term2
    term2 = total

print(result)

