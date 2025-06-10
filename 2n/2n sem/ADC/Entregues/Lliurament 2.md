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
> Tenim el següent:
> $$ \widehat{y} = X\widehat{\beta} = X(X^TX)^{-1}X^Ty $$
> Per tant la variància de $\widehat{y}$ és
> $$ \begin{align}
\mathbb{V}(\widehat{y}) &= \mathbb{V}(X(X^TX)^{-1}X^Ty) = \\
&= X(X^TX)^{-1}X^T\,\mathbb{V}(y)\,(X(X^TX)^{-1}X^T)^{T},
\end{align} $$
on $\mathbb{V}(y)=\mathbb{V}(X\beta+\varepsilon)=\mathbb{V}(\varepsilon)=\sigma ^{2}I$ , i per tant:
> $$ \begin{align}
\mathbb{V}(\widehat{y}) &= \sigma^{2}X(X^TX)^{-1}X^T(X(X^TX)^{-1}X^T)^{T} = \\
&= \boxed{\,\sigma^{2}X(X^{T}X)^{-1}X^{T}\,}
\end{align} $$

**(c) Variància de $\boldsymbol\varepsilon$.**
> El vector d'errors és:
> $$ \begin{align}
\varepsilon &= y-\widehat{y} = y-X\widehat{\beta} =\\
&= y - X(X^TX)^{-1}X^T y = \\
&=(I-X(X^TX)^{-1}X^T)\,y
\end{align} $$
> Per tant, la seva variància serà:
> $$ \begin{align}
\mathbb{V}(\varepsilon) &= \mathbb{V}((I-X(X^TX)^{-1}X^T)\,y) = \\
&= (I-X(X^TX)^{-1}X^T)\,\mathbb{V}(y)\,(I-X(X^TX)^{-1}X^T)^{T} \\
&= \sigma^{2}\,(I-X(X^TX)^{-1}X^T)\,(I-X(X^TX)^{-1}X^T)^{T} \\
&= \sigma^{2}\,(I- X(X^TX)^{-1}X^T)
\end{align}$$


---
##### Exercici 3.

**(a) Funció *link*.**
> Escollim l'enllaç d'identitat, ja que s'especifica que segueix una distribució amb mitjana $\beta_{1}x_{i}$, és a dir, una relació directa. Provant el model amb `link = "identity"` obtenim els mateixos resultats que la sortida proporcionada.

**(b) IC del 95% per $\boldsymbol{\beta_{1}}$.**
> El verdader valor de $\beta_{1}$ es troba en l'interval $(1.719, 3.913)$ amb un $95\%$ de confiança.

**(c) Aberracions cromosòmiques per $\boldsymbol{x=4}$ .**
> Per a una dosi $x=4$, s'esperen $10.5$ aberracions cromosòmiques en mitjana. El valor real es troba en linterval $(6.009, 14.991)$ amb un $95\%$ de confiança.