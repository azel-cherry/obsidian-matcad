# Pràctica 1

### 1. Resolució analítica

**(a) *Solució $\boldsymbol{u(a,t)}$*.** 

Comencem fent servir la condició inicial $u(0,t)=b(t)$. Tenim la següent EDP:
$$\begin{cases}
u_{t} + u_{a} = -c(a)\,u(a,t) \\
u(0,t) = b(t)
\end{cases}$$

Construïm el seu sistema característic.
$$\begin{cases}
\frac{da}{d\tau} = 1  \\
\frac{dt}{d\tau} = 1 \\
\frac{du}{d\tau} = -c(a)\,u \\[0.2em]
(a(0),t(0),u(0)) = (0,s,b(s))
\end{cases}$$

Trobem $a(s,\tau)$ i $t(s,\tau)$ a partir de les condicions inicials.
$$ \begin{cases}
a = \tau + f_{2}(s)\,, &a(0)=0 &\implies a=\tau \\
t = \tau + f_{1}(s)\,,&t(0)=s &\implies t=\tau+s
\end{cases} $$

Resolem la EDO d'$u(s,\tau)$ mitjançant separació de variables.
$$ \begin{align}
\frac{du}{d\tau} &= -c(a)\,u = -c(\tau)\,u \\
\int\frac{1}{u}\,du &= \int-c(\tau)\,d\tau  \\
\ln|u| &= -\int c(\tau)\,d\tau+f_{3}(s) \\
u(s,\tau) &= f_{3}(s)\,e^{-\int c(\tau)\,d\tau}
\end{align} $$

Triem $\int c(\tau)\,d\tau$ tal que la seva primitiva sigui nul·la quan $\tau=0$, és a dir $\int_{0}^{\tau}c(\alpha)\,d\alpha$. Per tant $f_{3}(s)=b(s)$ i
$$ u(s,\tau) = b(s)\, e^{-\int_{0}^{\tau}c(\alpha)\,d\alpha} \,.$$

Finalment fem el canvi de variable $\tau=a$ i $s=t-a$ i trobem la solució final
$$ \boxed{u(a,t) = b(t-a)\,e^{-\int_{0}^{\tau}c(\alpha)\,d\alpha}} \quad \text{si }0<t-a\,.$$

Observem que aquesta solució només està definida per $a<t$ ja que $b(s)$ només està definida per $s>0$. Per tant necessitem resoldre la EDP per l'altra condició inicial per trobar la solució completa.

Per la condició inicial $u(a,0)=u_{0}(s)$, tenim la següent EDP:
$$\begin{cases}
u_{t} + u_{a} = -c(a)\,u(a,t) \\
u(a,0) = u_{0}(a)
\end{cases}$$

Construïm el seu sistema característic.
$$\begin{cases}
\frac{da}{d\tau} = 1  \\
\frac{dt}{d\tau} = 1 \\
\frac{du}{d\tau} = -c(a)\,u \\[0.2em]
(a(0),t(0),u(0)) = (s,0,u_{0}(s))
\end{cases}$$

Trobem $a(s,\tau)$ i $t(s,\tau)$ a partir de les condicions inicials.
$$ \begin{cases}
a = \tau + f_{2}(s)\,, &a(0)=s &\implies a=\tau+s \\
t = \tau + f_{1}(s)\,,&t(0)=0 &\implies t=\tau
\end{cases} $$

Igual que abans, resolem la EDO d'$u(s,\tau)$ mitjançant separació de variables i fent servir el seu valor inicial.
$$ \begin{align}
\frac{du}{d\tau} &= -c(a)\,u = -c(\tau+s)\,u \\
\int\frac{1}{u}\,du &= \int-c(\tau+s)\,d\tau  \\
\ln|u| &= -\int c(\tau +s)\,d\tau+f_{3}(s) \\
u(s,\tau) &= f_{3}(s)\,e^{-\int c(\tau+s)\,d\tau} \\
u(s,\tau) &= u_{0}(s)\,e^{-\int_{0}^{\tau} c(\alpha+s)\,d\alpha}
\end{align} $$

Finalment fent fem els canvis de variables $\tau=t$ i $s=a-t$, i obtenim la segona part de la solució de la EDP:
$$ \boxed{u(a,t) = u_{0}(a-t)\,e^{\int_{0}^{t} c(\alpha+a-t)\,d\alpha}} \quad \text{si } 0 \leq a-t < 1 \,.$$

Observem que les regions $0<t-a$ i $0\leq a-t<1$ defineixen solucions al nostre domini $(a,t)\in((0,1),(0,\infty))$ per complet.


**(b) *Solució quan $\boldsymbol{t>1}$*.** 

Trivialment, quan $t>1$ sempre es compleix que $t>a$ ja que $a<1$, per tant ens trobarem a la part del domini en què la solució és
$$ u(a,t) = b(t-a)\,e^{-\int_{0}^{\tau}c(\alpha)\,d\alpha} \,,$$
que només depèn de $b(t)$.


**(c) *Solució estacionària*.** 

Derivant $\overline{u}(a)$ veiem que compleix l'EDP del problema estacionari:
$$ \overline{u}'(a) = b\,e^{-\int_{0}^{a}c(\alpha)\,d\alpha}(-c(a))=-c(a)\,\overline{u}(a) $$

I finalment comprovem la condició inicial:
$$ \overline{u}(0) = b\,e^{-\int_{0}^{0}c(\alpha)\,d\alpha} = b $$

Per tant $\overline{u}$ és solució del problema estacionari.