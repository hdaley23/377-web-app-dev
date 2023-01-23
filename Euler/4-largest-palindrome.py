largest = 0
for i in range(999, 100, -1):
    for j in range(i, 100, -1):
        x = i * j
        if x > largest:
            palindrome = str(i * j)
            if palindrome == palindrome[::-1]:
                largest = i * j
print(largest)