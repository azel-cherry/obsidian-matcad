
```ad-ex
**Trobem la solució general de $\boldsymbol{\color{green} y' + 2xy \color{black} = \color{pink} 2xe^{-x^2}}$.**

Primer trobem la solució de l'equació homogènia associada $\color{green} y' + 2xy \color{black} = 0$:
$$\begin{align*}
\frac{dy}{dx} + 2xy &= 0 \\
dy &= -2xy \, dx \\
\int \frac{dy}{y} &= -\int 2x \, dx \\
\ln |y| + c_{1} &= -x^2 + c_{2} \\
\end{align*}$$
$$\boxed{\boldsymbol{y_h(x)} = c\,e^{-x^2}}$$

Busquem una solució particular de la forma $C(x)e^{-\int2x\,dx}$:
$$\begin{align*}
y_p(x) &= C(x) e^{-x^2} \\
y_p'(x) &= C'(x) e^{-x^2} - 2x C(x) e^{-x^2} \\
\color{green} y_p'(x) + 2xy_p(x) &= \color{pink} C'(x) e^{-x^2}\\
C'(x) &= 2x \\
\int C'(x)\,dx &= \int 2x\,dx \\
C(x) &= x^2 + c \\
\end{align*}$$
$$\boxed{\boldsymbol{y_p(x)} = (x^2 + c)e^{-x^2}}$$

Finalment, fent servir que $y(x) = y_h(x) + y_p(x)$, tenim
$$\begin{gather*}
y(x) = c\,e^{-x^2} + (x^2 + c)e^{-x^2} \\
\boxed{\boldsymbol{y(x)} = (x^2 + C)\, e^{-^2x}}
\end{gather*}$$
```

