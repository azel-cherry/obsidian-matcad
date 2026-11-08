# Introduction

- **Stellar spectrum.** Measure of the electromagnetic radiation of a star, characterized by wavelength and flux. 
- **Absorption line.** Dip in the flux values where gases in the star's atmosphere have absorbed specific wavelengths.

Stellar activity:
- **Starspots.** Relatively cool, darker regions of the photosphere.
- **Faculae.** Magnetic regions that are generally brighter than the photosphere.

Possible changes to a star's spectrum:
- **Pure line shift.** Spectral profile moving left or right due to Doppler shift.
- **Line-shape distortion.** Change in spectrum shape due to stellar activity.

Some stellar activity that affects its apparent RV:

| ![[Pasted image 20261108221907.png \| 300]] | ![[shift.jpg \| 500]] |
|:-------------------------------------------:|:---------------------:|
|          *Starspots* or *faculae*           |       Rotation        |

- **Convective blueshift.** Even in inactive stars, all around the photosphere hot plasma rises from deep within the star (blueshift), forming bright granules. It cools down at the surface and sinks back down (redshift), forming narrower lanes between the granules.

	The bright granules cover a larger area than the cooler lanes between them, thus the overall star's spectral lines are blueshifted.




# Some mathematical background

````ad-prop
title: Cross-Correlation Function (CCF)

- **Observed stellar spectrum.** Spectra from the actual star.
- **Binary mask.** All null, except at the exact theoretical wavelengths where a specific type of star is supposed to have absorption lines.
  
These are compared across multiple radial velocities, an output value $O(v,t)$ for each velocity and observation. The lower the value, the higher the correlation.

The output of the CCF typically follows a normal distribution. Thus a Gaussian fit is typically applied, where its centroid represents the actual star's RV.

```ad-not
title: CCF diagnostics

We can extract other information about stellar activity from the CCF:
- **Contrast (CON).** Depth of the dip in comparison to the baseline. 
- **Full Width at Half Maximum (FWHM).** Width of the top half of the Gaussian curve.
- **Bisector Inverse Slope (BIS).** First a bisector curve is constructed finding the midpoint of the two CCF values at different heights. The upper (60-90%) and lower (10-40%) velocities are averaged and subtracted.

  In contrast to the other parameters, BIS describes asymmetry.
```
````


### Other approaches

After obtaining the RV time series $RV(t)$, typically a Gaussian Process (GP) regression is used to model the quasi-periodic distortions induced by stellar activity. It can also become multidimensional incorporating additional time-dependent measurements like photometry and CCF diagnostics.


### CANSTAR'S approach

```ad-prop
title: Gram-Schmidt Decomposition

Used to isolate pure line shifts from line-shape distortions.

1. A baseline template $T(v)$ of the star is created, averaging all CCFs across a long time series. Transient distortions are mitigated.
2. An orthogonal basis is created, where the first components (aside from the identity $I(v)$) correspond with $T(v)$ and its first derivative $T'(v)$, which captures the star's line shifts.
3. Subsequent components $\{G_{n}(v)\}_{n}$ model more complex shape distortions.
   
	_**Note:** Some of these distortion components model the same behavious as previously mentioned indicators like FWHM and BIS._
	
So we have a basis function and coefficients
$$ \begin{align}
B(v) &= [ I(v), T(v), T'(v), G_{2}(v),\dots, G(_{N-1}(v)) ]\,, \\[0.5em]
a(t) &= [ c_{0}(t), c_{1}(t), l(t), g_{2}(t),\dots, g_{N-1}(t) ]\,,
\end{align} $$

where $l(t)$ quantifies pure line shifts.
```

~={pink}**The problem:**=~ A pure line shift can also be caused by stellar activity.

~={green}**The approach:**=~ To learn stellar activity features from the distortion coefficients and their evolution over time in order to separate stellar activity-induced changes to the line shift.


# Synthetic data: StarSim

Simulates stellar surface (quite photosphere, cool spots and faculae) to produce synthetic photometric and spectroscopic observables. Directly computes the resulting CCF.

Active regions are modelled as circular starspots with 7 parameters ~={faded}(appearance time, lifetime, colatitude, longitude, spot radius, linear growth rate, linear decay rate)=~, surrounded by a facular region with a global facula-to-spot ratio parameter $Q$, fixed for each simulation.

Lastly, photon noise is simulated on the CCF. The ratio of mean observational error to $RV(t)$ RMS is computed in order to quantify the amount of noise to inject.