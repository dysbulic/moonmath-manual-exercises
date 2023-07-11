## *Exercise 3.2.2.7:* (Binary Representation).

Write an algorithm that computes the binary representation
$n = \sum\limits_{j=0}^{k−1} b_j · 2^j$ of any non-negative integer.

---
---

def to_binary(n):
  if n == 0:
    return '0'
  binary = ''
  while n > 0:
    binary = str(n % 2) + binary
    n = n // 2
  return binary