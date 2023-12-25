ans = int(input("enter the answer: "))
n1 = int(input("enter the n1: "))
n2 = int(input("enter the n2: "))
n3 = int(input("enter the n3: "))
n4 = int(input("enter the n4: "))

qNumbers = [n1, n2, n3, n4]

def firstCase():

    for i in range(24):
        numSeq = result2[i]
        tempN1 = qNumbers[(int(numSeq[0]))]
        tempN2 = qNumbers[(int(numSeq[1]))]
        tempN3 = qNumbers[(int(numSeq[2]))]
        tempN4 = qNumbers[(int(numSeq[3]))]

        for j in range(256):
            opSeq = result[j]
            op1 = opSeq[0]
            op2 = opSeq[1]
            op3 = opSeq[2]
            op4 = opSeq[3]

            currentValue = 0

            match op1:
                case "+":
                    currentValue = tempN1 + tempN2
                case "-":
                    currentValue = tempN1 - tempN2
                case "*":
                    currentValue = tempN1 * tempN2
                case "/":
                    currentValue = tempN1 / tempN2

            match op2:
                case "+":
                    currentValue += tempN3
                case "-":
                    currentValue -= tempN3
                case "*":
                    currentValue *= tempN3
                case "/":
                    currentValue /= tempN3

            match op3:
                case "+":
                    currentValue += tempN4
                case "-":
                    currentValue -= tempN4
                case "*":
                    currentValue *= tempN4
                case "/":
                    currentValue /= tempN4


            if eval(f"{tempN1} {op1} {tempN2} {op2} {tempN3} {op3} {tempN4}") == ans and ans == currentValue:
                print(f"{tempN1} {op1} {tempN2} {op2} {tempN3} {op3} {tempN4}")
                return





def secondCase():
    for i in range(24):
        numSeq = result2[i]
        tempN1 = qNumbers[(int(numSeq[0]))]
        tempN2 = qNumbers[(int(numSeq[1]))]
        tempN3 = qNumbers[(int(numSeq[2]))]
        tempN4 = qNumbers[(int(numSeq[3]))]

        for j in range(256):
            opSeq = result[j]
            op1 = opSeq[0]
            op2 = opSeq[1]
            op3 = opSeq[2]
            op4 = opSeq[3]

            value1 = 0
            value2 = 0
            finalValue = 0

            match op1:
                case "+":
                    value1 = tempN1 + tempN2
                case "-":
                    value1 = tempN1 - tempN2
                case "*":
                    value1 = tempN1 * tempN2
                case "/":
                    value1 = tempN1 / tempN2

            match op2:
                case "+":
                    value2 = tempN3 + tempN4
                case "-":
                    value2 = tempN3 - tempN4
                case "*":
                    value2 = tempN3 * tempN4
                case "/":
                    value2 = tempN3 / tempN4

            match op3:
                case "+":
                    finalValue = value1 + value2
                case "-":
                    finalValue = value1 - value2
                case "*":
                    finalValue = value1 * value2
                case "/":
                    finalValue = value1 / value2

            if finalValue == ans and ans == eval(f"({tempN1} {op1} {tempN2}) {op3} ({tempN3} {op2} {tempN4})"):
                print("Got the answer!! ")
                print(f"({tempN1} {op1} {tempN2}) {op3} ({tempN3} {op2} {tempN4})")
                return


def thirdCase():
    for i in range(24):
        numSeq = result2[i]
        tempN1 = qNumbers[(int(numSeq[0]))]
        tempN2 = qNumbers[(int(numSeq[1]))]
        tempN3 = qNumbers[(int(numSeq[2]))]
        tempN4 = qNumbers[(int(numSeq[3]))]

        for j in range(256):
            opSeq = result[j]
            op1 = opSeq[0]
            op2 = opSeq[1]
            op3 = opSeq[2]
            op4 = opSeq[3]

            value1 = tempN1
            value2 = 0
            finalValue = 0

            match op1:
                case "+":
                    value2 = tempN2 + tempN3
                case "-":
                    value2 = tempN2 - tempN3
                case "*":
                    value2 = tempN2 * tempN3
                case "/":
                    value2 = tempN2 / tempN3

            match op2:
                case "+":
                    finalValue = tempN1 + value2
                case "-":
                    finalValue = tempN1 - value2
                case "*":
                    finalValue = tempN1 * value2
                case "/":
                    finalValue = tempN1 / value2

            match op3:
                case "+":
                    finalValue += tempN4
                case "-":
                    finalValue -= tempN4
                case "*":
                    finalValue *= tempN4
                case "/":
                    finalValue /= tempN4

            if finalValue == ans and ans == eval(f"{tempN1} {op2} ({tempN2} {op1} {tempN3}) {op3} {tempN4}"):
                print("Got the answer!! ")
                print(f"{tempN1} {op2} ({tempN2} {op1} {tempN3}) {op3} {tempN4}")
                return

def fourthCase():
    for i in range(24):
        numSeq = result2[i]
        tempN1 = qNumbers[(int(numSeq[0]))]
        tempN2 = qNumbers[(int(numSeq[1]))]
        tempN3 = qNumbers[(int(numSeq[2]))]
        tempN4 = qNumbers[(int(numSeq[3]))]

        for j in range(256):
            opSeq = result[j]
            op1 = opSeq[0]
            op2 = opSeq[1]
            op3 = opSeq[2]
            op4 = opSeq[3]

            value1 = tempN4
            value2 = 0
            finalValue = 0

            match op1:
                case "+":
                    value2 = tempN1 + tempN2
                case "-":
                    value2 = tempN1 - tempN2
                case "*":
                    value2 = tempN1 * tempN2
                case "/":
                    value2 = tempN1 / tempN2

            match op2:
                case "+":
                    value2 += tempN3
                case "-":
                    value2 -= tempN3
                case "*":
                    value2 *= tempN3
                case "/":
                    value2 /= tempN3

            match op3:
                case "+":
                    finalValue = value2 + value1
                case "-":
                    finalValue = value2 - value1
                case "*":
                    finalValue = value2 * value1
                case "/":
                    finalValue = value2 / value1

            if finalValue == ans and ans == eval(f"({tempN1} {op1} {tempN2} {op2} {tempN3}) {op3} {tempN4}"):
                print("Got the answer!! ")
                print(f"({tempN1} {op1} {tempN2} {op2} {tempN3}) {op3} {tempN4}")
                return

def fifthCase():
    for i in range(24):
        numSeq = result2[i]
        tempN1 = qNumbers[(int(numSeq[0]))]
        tempN2 = qNumbers[(int(numSeq[1]))]
        tempN3 = qNumbers[(int(numSeq[2]))]
        tempN4 = qNumbers[(int(numSeq[3]))]

        for j in range(256):
            opSeq = result[j]
            op1 = opSeq[0]
            op2 = opSeq[1]
            op3 = opSeq[2]
            op4 = opSeq[3]

            value1 = tempN4
            value2 = 0
            finalValue = 0

            match op1:
                case "+":
                    value2 = tempN1 + tempN2
                case "-":
                    value2 = tempN1 - tempN2
                case "*":
                    value2 = tempN1 * tempN2
                case "/":
                    value2 = tempN1 / tempN2

            match op2:
                case "+":
                    value2 += tempN3
                case "-":
                    value2 -= tempN3
                case "*":
                    value2 *= tempN3
                case "/":
                    value2 /= tempN3

            match op3:
                case "+":
                    finalValue = value2 + value1
                case "-":
                    finalValue = value2 - value1
                case "*":
                    finalValue = value2 * value1
                case "/":
                    finalValue = value2 / value1

            if finalValue == ans and ans == eval(f"(({tempN1} {op1} {tempN2}) {op2} {tempN3}) {op3} {tempN4}"):
                print("Got the answer!! ")
                print(f"(({tempN1} {op1} {tempN2}) {op2} {tempN3}) {op3} {tempN4}")
                return

def sixthCase():
    for i in range(24):
        numSeq = result2[i]
        tempN1 = qNumbers[(int(numSeq[0]))]
        tempN2 = qNumbers[(int(numSeq[1]))]
        tempN3 = qNumbers[(int(numSeq[2]))]
        tempN4 = qNumbers[(int(numSeq[3]))]

        for j in range(256):
            opSeq = result[j]
            op1 = opSeq[0]
            op2 = opSeq[1]
            op3 = opSeq[2]
            op4 = opSeq[3]

            value1 = int(str(tempN1) + str(tempN2))
            finalValue = 0

            match op1:
                case "+":
                    value1 += tempN3
                case "-":
                    value1 -= tempN3
                case "*":
                    value1 *= tempN3
                case "/":
                    value1 /= tempN3

            match op2:
                case "+":
                    finalValue = value1 + tempN4
                case "-":
                    finalValue = value1 - tempN4
                case "*":
                    finalValue = value1 * tempN4
                case "/":
                    finalValue = value1 / tempN4

            if finalValue == ans and ans == eval(f"({int(str(tempN1) + str(tempN2))}) {op1} {tempN3} {op2} {tempN4}"):
                print("Got the answer!! ")
                print(f"({int(str(tempN1) + str(tempN2))}) {op1} {tempN3} {op2} {tempN4}")
                return

def seventhCase():
    for i in range(24):
        numSeq = result2[i]
        tempN1 = qNumbers[(int(numSeq[0]))]
        tempN2 = qNumbers[(int(numSeq[1]))]
        tempN3 = qNumbers[(int(numSeq[2]))]
        tempN4 = qNumbers[(int(numSeq[3]))]

        for j in range(256):
            opSeq = result[j]
            op1 = opSeq[0]
            op2 = opSeq[1]
            op3 = opSeq[2]
            op4 = opSeq[3]

            value1 = int(str(tempN1) + str(tempN2))
            finalValue = 0

            match op1:
                case "+":
                    value1 += tempN3
                case "-":
                    value1 -= tempN3
                case "*":
                    value1 *= tempN3
                case "/":
                    value1 /= tempN3

            match op2:
                case "+":
                    finalValue = value1 + tempN4
                case "-":
                    finalValue = value1 - tempN4
                case "*":
                    finalValue = value1 * tempN4
                case "/":
                    finalValue = value1 / tempN4

            if finalValue == ans and ans == eval(f"(({int(str(tempN1) + str(tempN2))}) {op1} {tempN3}) {op2} {tempN4}"):
                print("Got the answer!! ")
                print(f"(({int(str(tempN1) + str(tempN2))}) {op1} {tempN3}) {op2} {tempN4}")
                return

def eightCase():
    for i in range(24):
        numSeq = result2[i]
        tempN1 = qNumbers[(int(numSeq[0]))]
        tempN2 = qNumbers[(int(numSeq[1]))]
        tempN3 = qNumbers[(int(numSeq[2]))]
        tempN4 = qNumbers[(int(numSeq[3]))]

        for j in range(256):
            opSeq = result[j]
            op1 = opSeq[0]
            op2 = opSeq[1]
            op3 = opSeq[2]
            op4 = opSeq[3]

            value1 = int(str(tempN1) + str(tempN2) + str(tempN3))


            match op1:
                case "+":
                    value1 += tempN4
                case "-":
                    value1 -= tempN4
                case "*":
                    value1 *= tempN4
                case "/":
                    value1 /= tempN4

            if value1 == ans and ans == eval(f"(({int(str(tempN1) + str(tempN2) + str(tempN3))}) {op1} {tempN4})"):
                print("Got the answer!! ")
                print(f"(({int(str(tempN1) + str(tempN2) + str(tempN3))}) {op1} {tempN4})")
                return


# def generate_permutations(pattern, repetitions):
#     def permute(prefix, remaining_reps):
#         if remaining_reps == 0:
#             permutations.append(prefix)
#             return
#         for char in pattern:
#             permute(prefix + char, remaining_reps - 1)
#
#     permutations = []
#     permute('', repetitions)
#     return permutations


def generate_permutations(pattern, repetitions):
    permutations = []
    for i in pattern:
        for j in pattern:
            for k in pattern:
                for l in pattern:
                    a = ""+i+j+k+l
                    permutations.append(a)
    return permutations


pattern = '+-*/'
repetitions = 4

result = generate_permutations(pattern, repetitions)




# def generate_permutations_numbers(numbers):
#     def permute(prefix, remaining_nums):
#         if not remaining_nums:
#             permutations.append(prefix)
#             return
#         for num in remaining_nums:
#             new_prefix = prefix + str(num)
#             new_remaining_nums = [n for n in remaining_nums if n != num]
#             permute(new_prefix, new_remaining_nums)
#
#     permutations = []
#     permute('', numbers)
#     return permutations

def generate_permutations_numbers(numbers):
    p = []
    for i in numbers:
        for j in numbers:
            for k in numbers:
                for l in numbers:
                    if (i != j and j != k and i != k and k != l and j != l and i != l):
                        temp_num = f"{i}{j}{k}{l}"
                        p.append(temp_num)

    return p





numbers = [0, 1, 2, 3]
result2 = generate_permutations_numbers(numbers)


# print(len(result))




firstCase()
secondCase()
thirdCase()
fourthCase()
fifthCase()
sixthCase()
seventhCase()
eightCase()



