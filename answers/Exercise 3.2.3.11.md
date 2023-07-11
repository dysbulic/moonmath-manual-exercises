## *Exercise 3.2.3.11:*

Show that $gcd(n, m) = gcd(n + m, m)$ for all $n, m \in \mathbb{N}$.

---
---

On the one hand:

$k = gcd(n,m)$
$\implies k | m$ and $k | n$
$\implies k | (m + n)$
$\implies k | gcd(m + n, m)$

On the other hand:

$k' = gcd(m + n, m)$
$\implies k' | (m + n)$ and $k'|m$
$\implies k'|(m + n - m)$
$\implies k'|n$
$\implies k'|gcd(m, n)$

Putting both hands together:

*(note: gcd is always a positive number)*

$k'|gcd(m, n) \implies k'|k$
$k | gcd(m + n, m) \implies k|k'$
$\implies k = k'$ 
$\implies gcd(n,m) = gcd(m + n, m)$