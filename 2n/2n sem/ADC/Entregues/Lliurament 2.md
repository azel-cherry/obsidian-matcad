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
&= \boxed{\,\sigma^{2}\,(I- X(X^TX)^{-1}X^T)\,}
\end{align}$$


---
##### Exercici 3.
Aquest exercici està fet mitjançant un *script* d'R (veure `lliur2.r`), excepte l'últim apartat.

**(a) Funció *link*.**
> Escollim l'enllaç d'identitat, ja que s'especifica que segueix una distribució amb mitjana $\beta_{1}x_{i}$, és a dir, una relació directa. Provant el model amb `link = "identity"` obtenim els mateixos resultats que la sortida proporcionada.

**(b) IC del 95% per $\boldsymbol{\beta_{1}}$.**
> El verdader valor de $\beta_{1}$ es troba en l'interval $(1.719, 3.913)$ amb un $95\%$ de confiança.

**(c) Aberracions cromosòmiques per $\boldsymbol{x=4}$ .**
> Per a una dosi $x=4$, s'esperen $10.5$ aberracions cromosòmiques en mitjana. El valor real es troba en l'interval $(6.009, 14.991)$ amb un $95\%$ de confiança.

**(d) Funció log-versemblança i estimador de $\boldsymbol{\beta_{1}}$.**
> La funció log-versemblança és
> $$ \begin{align}
l_{i}(\beta_{1}\mid y) &= \sum_{i=1}^{n}(y_{i}\log(\mu_{i}(\beta_{1}))-\mu_{i}(\beta_{1})-\log(y_{i}!)) \\
&= \boxed{\,\sum_{i=1}^{n}(y_{i} \log(\beta_{1}x_{i}) - \beta_{1}x_{i} - \log(y_{i}!))\,} \,.
\end{align} $$
> Anem a maximitzar-la. Si la derivem respecte $\beta_{1}$, obtenim:
> $$ \frac{\partial l}{\partial\beta_{1}} = \sum_{i=1}^{n} \left( \frac{y_{i}}{\beta_{1}} - 
 x_{i} \right), $$
> que igualant a zero i aïllant ens permet obtenir el màxim, és a dir, l'estimador de $\beta_{1}:$
> $$ \begin{gather}
\sum_{i=1}^{n} \left( \frac{y_{i}}{\beta_{1}} - x_{i} \right) = 0 \implies \frac{1}{\beta_{1}}\sum_{i} y_{i} = \sum_{i} x_{i} \\
\widehat{\beta}_{1} = \frac{\sum y_{i}}{\sum x_{i}} = \frac{\frac{1}{n}\sum y_{i}}{\frac{1}{n}\sum x_{i}} = \frac{\overline{y}}{\overline{x}}
\end{gather} $$


---
##### Exercici 4.

**(a) Observacions influents.**
> Les observacions influents son punts de dades que afecten desproporcionadament els resultats del model de regressió. Si es treuen, el model canvia significativament (canvien coeficients, prediccions, etc.). Es poden detectar de les següents maneres:
> + ***Leverage*:** El valor de l'element $h_{ii}$ de la matriu 
> 	$$ H = X(X^TX)^{-1}X^T $$
> 	es pot interpretar com el *leverage* de la observació $i$-èssima del model. Si aquest valor és molt alt,
> 	$$ h_{ii} > \frac{2m}{n} \,,$$
> 	amb $m$ el nombre de predictors i $n$ el nombre d'observacions, pot haver-hi una potencial influència excessiva.
> 	
> + **Distància de Cook:** La distància de Cook mesura directament la influència de cada observació:
> 	$$ D_{i} = \frac{\widehat{(\beta}-\widehat{\beta}_{(i)})^{T}X^TX\,(\widehat{\beta}-\widehat{\beta}_{(i)})}{m\,\widehat{\sigma}^{2}} \,,$$
> 	amb $X$ de mida $n\times m$ i $\widehat{\beta}_{(i)}$ l'estimador de $\beta$ després d'eliminar la $i$-èssima observació. Com amb el *leverage*, si té un valor massa elevat,
> 	$$ D_{i} > \frac{4}{n} \,,$$
> 	indica una possible influència excessiva.

**(b) Càlcul d'un IC del 95%.**
> Tenim el següent model de regressió lineal:
> $$ \text{preu} = \beta_{0} + \beta_{1}\cdot\text{km} + \varepsilon \,.$$
> Primer calculem les estimacions dels paràmetres:
> $$ \begin{align}
\widehat{\beta}_{1} &= \frac{\sum(x_{i}-\overline{x})(y_{i}-\overline{y})}{\sum(x_{i}-\overline{x})^{2}}\,, \\
\widehat{\beta}_{0} &= \overline{y}-\widehat{\beta}_{1}\,\overline{x}\,,
\end{align} $$
> amb $\overline{x},\overline{y}$ les mitjanes de les observacions $x_{i}$ i $y_{i}$ respectivament. Ara calculem la predicció per un quilometratge de $50000$:
> $$ \widehat{y}_{0} = \widehat{\beta}_{0} + 50000\,\widehat{\beta}_{1} $$
> I el seu error estàndard:
> $$ SE_{0} = \widehat{\sigma}^{2}\sqrt{\frac{1}{n}+\frac{(50000-\overline{x})^{2}}{\sum(x_{i}-\overline{x})^{2}}} \quad\text{amb}\quad \widehat{\sigma}^{2} = \sqrt{\frac{\sum(y_{i}-\widehat{y}_{i})^{2}}{n-2}} $$
> A partir d'això ja podem calcular l'interval de confiança:
> $$ IC_{0.95} = \left( \widehat{y}_{0} \pm t_{0.975,\,4} \cdot SE_{0}  \right) $$
> amb $t_{0.975,4}$ el quantil t de Student de $0.975$ i amb 4 graus de llibertat.

**(c) *Null deviance* i *Residual deviance*.**
> La *null deviance* és la desviació del model amb només l'*intercept* (és a dir, el model "buit") respecte la desviació del model saturat (amb un paràmetre per cada observació; és a dir, el model que s'ajusta perfectament). És la desviació total a explicar pels predictors. La *null deviance* es calcula fent
> $$ 2(l_{\text{sat}}-l_{\text{null}}) \,,$$
> amb $l_{\text{sat}},l_{\text{null}}$ les log-versemblança del model saturat i del model nul respectivament.
> 
> La *residual deviance* és la desviació del model amb predictors (el model ajustat) respecte el model saturat. Quantifica la variabilitat no explicada pel model ajustat. Es calcula de la següent manera:
> $$ 2(l_{\text{sat}}-l_{\text{mod}}) \,,$$
> amb $l_{\text{sat}},l_{\text{mod}}$ les log-versemblança dels models saturat i ajustat respectivament.