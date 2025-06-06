Sam Farré Baltà (1605576)

# **Anàlisi de Dades Complexes:** Segon Lliurament 

---

##### **Exercici 1.**

**(a) Núvol de punts mitjançant polinomi de segon grau.**
> Ajustem el model següent:
> $$ y_{i} = \beta_{1}x_{i}+\beta_{2}x_{i}^{2} + \varepsilon_{i} \,,$$
> Per tant la matriu de disseny i el vector de paràmetres son:
>$$ X = \begin{pmatrix}
x_{1} & x_{1}^{2} \\
x_{2} & x_{2}^{2} \\
\vdots & \vdots \\
x_{n} & x_{n}^{2}
\end{pmatrix}\,, \quad \beta=\begin{pmatrix}
\beta_{1} \\
\beta_{2}
\end{pmatrix}\,. $$

**(b) Dues rectes de pendent diferent.**
> Considerant el vector indicador:
> $$ z_{i}=\begin{cases}
1 \quad\text{si }i\in\text{grup 1} \\
0 \quad\text{si }i\in\text{grup 2}
\end{cases} $$
> Tenim el model
> $$ y_{i} = \beta_{0} + \beta_{1}\,x_{i}\,z_{i} + \beta_{2}\,x_{i}\,(1-z_{i})\,. $$
> Per tant la matriu de disseny i el vector de paràmetres seran:
> $$ X = \begin{pmatrix}
1 & x_{1}\,z_{1} & x_{1}\,(1-z_{1}) \\
1 & x_{2}\,z_{2} & x_{2}\,(1-z_{2}) \\
\vdots & \vdots & \vdots \\
1 & x_{n}\,z_{n} & x_{n}\,(1-z_{n})
\end{pmatrix}\,, \quad \beta=\begin{pmatrix}
\beta_{0} \\
\beta_{1} \\
\beta_{2}
\end{pmatrix} \,.$$


---

##### **Exercici 2.**

**(a) Càlcul de $\boldsymbol{\mathbb{E}(\widehat{\beta})}$ i $\boldsymbol{\mathbb{V}(\widehat{\beta})}$.**

> La solució dels mínims quadrats és
> $$ \widehat{\beta} = (X^TX)^{-1}X^Ty \,,$$
> amb $y=X\beta+\varepsilon$, per tant:
> $$ \begin{align}
\widehat{\beta} &= (X^TX)^{-1}X^T(X\beta+\varepsilon)= \\
&= (X^TX)^{-1}X^TX\beta + (X^TX)^{-1}X^T\varepsilon= \\
&= \beta + (X^TX)^{-1}X^T\varepsilon
\end{align} $$
> Calculem l'esperança de $\widehat{\beta}$ :
> $$ \begin{align}
\mathbb{E}(\widehat{\beta}) &= \mathbb{E}(\beta + (X^TX)^{-1}X^T\varepsilon) = \\
&=\beta + (X^TX)^{-1}X^T\,\mathbb{E}(\varepsilon) = \boxed{\,\beta\,}
\end{align} $$
> Calculem la variància de $\widehat{\beta}$ :
> $$ \begin{align}
\mathbb{V}(\widehat{\beta}) &= \mathbb{V}(\beta + (X^TX)^{-1}X^T\varepsilon) = \\
&= (X^TX)^{-1}X^T\,\mathbb{V}(\varepsilon)\,X(X^TX)^{-1} = \\
&= (X^TX)^{-1}X^T\,\sigma^{2}I\,X(X^TX)^{-1} = \\
&= \sigma^{2}(X^TX)^{-1}X^TX(X^TX)^{-1}= \\
&= \boxed{\,\sigma^{2}(X^TX)^{-1}\,}
\end{align} $$

**(b) Variància de $\boldsymbol{\widehat{y}}$.**

> $$ \widehat{y} = X\widehat{\beta} = X(X^TX)^{-1}X^Ty $$