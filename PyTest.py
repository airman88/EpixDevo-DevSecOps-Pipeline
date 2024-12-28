#Example Calculations Application Code 
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Division by zero is not allowed.")
    return a / b

def calculator(operation, a, b):
    if operation == 'add':
        return add(a, b)
    elif operation == 'subtract':
        return subtract(a, b)
    elif operation == 'multiply':
        return multiply(a, b)
    elif operation == 'divide':
        return divide(a, b)
    else:
        raise ValueError("Unknown operation")

# Example usage:
print(calculator('add', 3, 4))        # Output: 7
print(calculator('subtract', 10, 4))  # Output: 6
print(calculator('multiply', 3, 4))   # Output: 12
print(calculator('divide', 12, 4))    # Output: 3

#merge test