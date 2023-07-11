## *Exercise 3.2.2.5*: (Integer Long Division).

Find an $m \in \mathbb{Z}$ and an $r \in \mathbb{N}$ with $0 \leq r < |b|$ such that $a = q · b + r$ for

* $a$: the dividend
* $b$: the divisor
* $q$: the quotient
* $r$: the remainder

holds for the following pairs:

1. $(a, b) = (27, 5)$
2. $(a, b) = (27, −5)$
3. $(a, b) = (127, 0)$
4. $(a, b) = (−1687, 11)$
5. $(a, b) = (0, 7)$

In which cases are your solutions unique?

---
---

Suppose that the numbers $a$, $b$, $q$, & $r$ satisfy $a = q · b + r$. The following notation for the $q$ & $r$ then holds:

* ${\lfloor}a \div b\rfloor := q$
* $a \mathbin{\%} b := r$

So:

1. $(a, b) = (27, 5)$

* $q = \lfloor27 \div 5\rfloor = 5$
* $r = 27 \mathbin{\%} 5 = 2$

2. $(a, b) = (27, −5)$

* $q = \lfloor27 \div −5\rfloor = −5$
* $r = 27 \mathbin{\%} −5 = 2$

3. $(a, b) = (127, 0)$

* $q = \lfloor127 \div 0\rfloor$ is undefined
* $r = 127 \mathbin{\%} 0$ is undefined

4. $(a, b) = (−1687, 11)$

* $q = \lfloor−1687 \div 11\rfloor = -154$
* $r = −1687 \mathbin{\%} 11 = 7$

5. $(a, b) = (0, 7)$

* $q = \lfloor0 \div 7\rfloor = 0$
* $r = 0 \mathbin{\%} 7 = 0$

All of the solutions are unique.
